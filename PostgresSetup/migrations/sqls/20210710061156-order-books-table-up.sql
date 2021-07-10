CREATE TABLE order_books (
    id SERIAL,
    quantity INTEGER,
    orderId bigint REFERENCES orders(id),
    bookId bigint REFERENCES books(id)
);