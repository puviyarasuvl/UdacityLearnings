CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    active boolean,
    userId VARCHAR(100) REFERENCES users(user_id)
);