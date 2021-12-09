const { expect } = require('chai');
const library = require('./library');

describe('Test Library functionality', () => {
    describe('calcPriceOfBook', () => {
        it('test book price with invalid inputs', () => {
            expect(() => library.calcPriceOfBook(1, 1980)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook([], 1980)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook({}, 1980)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Test Book', '1980')).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Test Book', 1980.9)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Test Book', [])).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Test Book', {})).to.throw("Invalid input");
        });

        it('test book price when the published year is before 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1979)).to.be.equal(`Price of Test Book is 10.00`);
        });

        it('test book price when the published year is 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1980)).to.be.equal(`Price of Test Book is 10.00`);
        });

        
        it('test book price when the published year is after 1980', () => {
            expect(library.calcPriceOfBook('Test Book', 1981)).to.be.equal(`Price of Test Book is 20.00`);
        });
    });

    describe('findBook', () => {
        it('test find book function when empty array is given', () => {
            expect(() => library.findBook([], 'Test Book')).to.throw(`No books currently available`);
        });

        it('test find book function when the desire book is in the array', () => {
            expect(library.findBook(['Test Book', 'Test Book1'], 'Test Book')).to.be.equal(`We found the book you want.`);
        });

        it('test find book function when the desire book is not in the array', () => {
            expect(library.findBook(['Test Book', 'Test Book1'], 'Test Book2')).to.be.equal(`The book you are looking for is not here!`);
        });
    });

    describe('arrangeTheBooks', () => {
        it('test arrange books when the given book count is invalid', () => {
            expect(() => library.arrangeTheBooks('')).to.throw(`Invalid input`);
            expect(() => library.arrangeTheBooks([])).to.throw(`Invalid input`);
            expect(() => library.arrangeTheBooks({})).to.throw(`Invalid input`);
            expect(() => library.arrangeTheBooks(-1)).to.throw(`Invalid input`);
        });

        it('test arrange books when the given book count is less than the available space', () => {
            expect(library.arrangeTheBooks(39)).to.be.equal(`Great job, the books are arranged.`);
        });

        it('test arrange books when the given book count is less than the available space', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal(`Great job, the books are arranged.`);
        });

        it('test arrange books when the given book count is less than the available space', () => {
            expect(library.arrangeTheBooks(0)).to.be.equal(`Great job, the books are arranged.`);
        });

        it('test arrange books when the given book count is greather than the available space', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal(`Insufficient space, more shelves need to be purchased.`);
        });
    });
})