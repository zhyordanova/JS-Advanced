const { expect } = require('chai');
const library = require('./library');

describe('Test Library', () => {

    describe('calcPriceOfBook', () => {
        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook(1, 'test')).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('test book', 'test year')).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('test book', 2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('test book', -2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook(2, 2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook([], 2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook({}, 2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('', 2.2)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('test book', null)).to.throw('Invalid input');
        });

        it('test calculate price of book with invalid parameters and trow an error', () => {
            expect(() => library.calcPriceOfBook('test book', undefined)).to.throw('Invalid input');
        });

        it('test calculate price of book published before 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1970)).to.be.equal('Price of Test Book is 10.00');
        });

        it('test calculate price of book published at 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1980)).to.be.equal('Price of Test Book is 10.00');
        });

        it('test calculate price of book published after 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1981)).to.be.equal('Price of Test Book is 20.00');
        });
    });

    describe('findBook', () => {
        it('test find book when the array is empty', () => {
            expect(() => library.findBook([], 'test book')).to.throw('No books currently available');
        });

        it('test find book when desired book is in the array', () => {
            expect(library.findBook(['Test book', 'Test book2'], 'Test book')).to.be.equal('We found the book you want.');
        });

        it('test find book when desired book is not in the array', () => {
            expect(library.findBook(['Test book', 'Test book2'], 'Test book3')).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('test arrange books with invalid parameters and trow an error', () => {
            expect(() => library.arrangeTheBooks('2')).to.throw('Invalid input');
        });

        it('test arrange books with invalid parameters and trow an error', () => {
            expect(() => library.arrangeTheBooks(2.2)).to.throw('Invalid input');
        });

        it('test arrange books with invalid parameters and trow an error', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('test arrange books with invalid parameters and trow an error', () => {
            expect(() => library.arrangeTheBooks(-1.5)).to.throw('Invalid input');
        });

        it('test arrange books with invalid parameters and trow an error', () => {
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
        });

        it('test arrange books when the available space is less than the count of books', () => {
            expect(library.arrangeTheBooks(35)).to.be.equal('Great job, the books are arranged.');
        });

        it('test arrange books when the available space is equal to the count of books', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });

        it('test arrange books when the available space is greater than the count of books', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });

    });
})