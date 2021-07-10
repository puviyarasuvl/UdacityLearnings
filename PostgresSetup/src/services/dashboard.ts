import db from '../database';

export class Dashboard {
    async productInOrders(
        orderId: string
    ): Promise<{ title: String; bookdId: String; quantity: Number }[]> {
        try {
            const conn = await db.connect();
            const sql =
                'SELECT title, quantity, bookId FROM books INNER JOIN order_books ON books.id=order_books.bookId where orderId=$1';
            const result = await conn.query(sql, [orderId]);
            conn.release();
            return result.rows;
        } catch (err) {
            console.log(err);
            throw new Error(`Failed to query ${err}`);
        }
    }
}
