import { resourceLimits } from 'worker_threads';
import db from '../database';

export type Order = {
    id?: Number;
    active: Boolean;
    userId: string;
};

export type OrderBook = {
    id?: Number;
    quantity: Number;
    orderId: Number;
    bookId: Number;
};

export class OrdersHandler {
    async index(): Promise<Order[]> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();

            return result.rows;
        } catch (err) {
            console.log(err);
            throw new Error(`Failed to get the orders. Error : ${err}`);
        }
    }

    async show(id: string): Promise<Order | null> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT * FROM orders WHERE id=$1';
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows.length) {
                return result.rows[0];
            } else {
                return null;
            }
        } catch (err) {
            console.log(err);
            throw new Error(`Failed to get the order. Error : ${err}`);
        }
    }

    async create(newOrder: Order): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql =
                'INSERT INTO orders (active, userId) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [
                newOrder.active,
                newOrder.userId,
            ]);
            conn.release();

            return result.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error(`Failed to create the order. Error : ${err}`);
        }
    }

    async update(id: string): Promise<Order> {
        try {
            const conn = await db.connect();
            const sql = 'UPDATE orders SET active=false WHERE id=$1';
            const result = await conn.query(sql, [id]);
            conn.release();

            return result.rows[0];
        } catch (err) {
            console.log(err);
            throw new Error(
                `Failed to update the order status. Error : ${err}`
            );
        }
    }

    async addBook(
        quantity: Number,
        orderId: string,
        bookId: string
    ): Promise<OrderBook> {
        try {
            const conn = await db.connect();
            const sql = 'SELECT active FROM orders WHERE id=($1)';
            const result = await conn.query(sql, [orderId]);

            if (result.rows[0].active) {
                try {
                    const sql =
                        'INSERT INTO order_books (quantity, orderId, bookId) VALUES ($1, $2, $3) RETURNING *';
                    const result = await conn.query(sql, [
                        quantity,
                        orderId,
                        bookId,
                    ]);

                    conn.release();
                    return result.rows[0];
                } catch (err) {
                    console.log(err);
                    throw new Error(
                        `Failed to add the book to order. Error : ${err}`
                    );
                }
            } else {
                conn.release();
                throw new Error(`Order closed`);
            }
        } catch (err) {
            console.log(err);
            throw new Error(`Failed to add the book to order. ${err}`);
        }
    }
}
