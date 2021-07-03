import db from '../database';

export type Book = {
    id?: Number;
    title: String;
    total_pages: Number;
    author: String;
    type: String;
    summary: String;
};

export class BookStore {
    async index(): Promise<Book[]> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM books';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Not able to connec to the DB. Error : ${err}`);
        }
    }

    async show(id: String): Promise<Book> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM books WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Not able to connec to the DB. Error : ${err}`);
        }
    }

    async create(book: Book): Promise<Book> {
        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO books (title, total_pages, author, type, summary) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const result = await conn.query(sql, [
                book.title,
                book.total_pages,
                book.author,
                book.type,
                book.summary,
            ]);

            conn.release();

            return result.rows[0];
        } catch (err) {
            throw new Error(`Not able to connec to the DB. Error : ${err}`);
        }
    }

    async delete(id: String): Promise<void> {
        try {
            const conn = await db.connect();
            const sql = 'DELETE FROM books WHERE id=($1)';
            const result = await conn.query(sql, [id]);
            conn.release();
        } catch (err) {
            throw new Error(`Not able to connec to the DB. Error : ${err}`);
        }
    }
}
