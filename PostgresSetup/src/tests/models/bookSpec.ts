import { Book, BookStore } from '../../models/book';

const store = new BookStore();

describe('Books Model', () => {
    describe('Testing index method', () => {
        it('shoud have an index method', () => {
            expect(store.index).toBeDefined();
        });

        it('index method should return a list of products', async () => {
            const result = await store.index();
            expect(result).toEqual([]);
        });
    });

    describe('Testing create method', () => {
        it('should have create method', () => {
            expect(store.create).toBeDefined();
        });

        it('should create a new row and return the created row', async () => {
            const newBook: Book = {
                title: 'Harry Potter',
                total_pages: 1025,
                author: 'J.K.Rowling',
                type: 'Magic',
                summary: 'Magical Novel',
            };

            const result = await store.create(newBook);

            expect(result).toEqual({
                id: 1,
                title: 'Harry Potter',
                total_pages: 1025,
                author: 'J.K.Rowling',
                type: 'Magic',
                summary: 'Magical Novel',
            });
        });
    });

    describe('Testing show method', () => {
        it('should have show method', () => {
            expect(store.show).toBeDefined();
        });

        it('should return the book with id 1', async () => {
            const result = await store.show('1');

            expect(result).toEqual({
                id: 1,
                title: 'Harry Potter',
                total_pages: 1025,
                author: 'J.K.Rowling',
                type: 'Magic',
                summary: 'Magical Novel',
            });
        });

        it('should return undefined for book id 2', async () => {
            const result = await store.show('2');

            expect(result).toBeUndefined();
        });
    });

    describe('Testing delete method', () => {
        it('should have delete method', () => {
            expect(store.delete).toBeDefined();
        });

        it('should delete the book with id 1 and index method should return empty array', async () => {
            await store.delete('1');

            const result = await store.index();

            expect(result.length).toEqual(0);
        });
    });
});
