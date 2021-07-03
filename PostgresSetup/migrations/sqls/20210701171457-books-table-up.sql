CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    total_pages INTEGER,
    author VARCHAR(100),
    type VARCHAR(30),
    summary TEXT
);