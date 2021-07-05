import db from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export type User = {
    id?: Number;
    user_id: String;
    password: String;
};

const pepper = process.env.BCRYPT_PASSWORD as string;
const saltRounds = process.env.SALT_ROUNDS as string;
const secret = process.env.JWT_SECRET as string;

export class UserHandle {
    async create(user: User): Promise<string> {
        const hash = bcrypt.hashSync(
            user.password + pepper,
            parseInt(saltRounds)
        );

        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO users (user_id, password) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [user.user_id, hash]);

            const newUser = result.rows[0];

            const token = jwt.sign({ user: newUser }, secret);

            conn.release();

            return token;
        } catch (err) {
            console.log(err);

            throw new Error(`Falied to create user. Error : ${err}`);
        }
    }

    async authenticate(user: User): Promise<string | null> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM users WHERE user_id=($1)';
            const result = await conn.query(sql, [user.user_id]);

            conn.release();

            if (result.rows.length) {
                const selectedUser = result.rows[0];

                if (
                    bcrypt.compareSync(
                        user.password + pepper,
                        selectedUser.password
                    )
                ) {
                    const token = jwt.sign(selectedUser.user_id, secret);
                    return token;
                }
            }

            return null;
        } catch (err) {
            throw new Error(`Falied to validate user. Error : ${err}`);
        }
    }
}
