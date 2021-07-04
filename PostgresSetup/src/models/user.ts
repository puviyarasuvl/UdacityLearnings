import db from '../database';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export type User = {
    id?: Number;
    user_id: String;
    password: String;
};

const pepper = process.env.BCRYPT_PASSWORD as string;
const saltRounds = process.env.SALT_ROUNDS as string;

export class UserHandle {
    async create(user: User): Promise<User> {
        const hash = bcrypt.hashSync(
            user.password + pepper,
            parseInt(saltRounds)
        );

        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO users (user_id, password) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [user.user_id, hash]);

            conn.release();

            return result.rows[0];
        } catch (err) {
            console.log(err);

            throw new Error(`Falied to create user. Error : ${err}`);
        }
    }

    async authenticate(user: User): Promise<User | null> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM users WHERE user_id=($1)';
            const result = await conn.query(sql, [user.user_id]);

            if (result.rows.length) {
                const selectedUser = result.rows[0];

                if (
                    bcrypt.compareSync(
                        user.password + pepper,
                        selectedUser.password
                    )
                ) {
                    return selectedUser;
                }
            }

            return null;
        } catch (err) {
            throw new Error(`Falied to validate user. Error : ${err}`);
        }
    }
}
