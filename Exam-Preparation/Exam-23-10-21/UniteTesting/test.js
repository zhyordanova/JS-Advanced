const { expect } = require('chai');
const library = require('./library');

describe('Test library', () => {
    describe('Test calcPriceOfBook', () => {
        it('test calculate price with year after 1980', () => {
            expect(library.calcPriceOfBook('Harry Potter', 1990)).to.be.equal(`Price of Harry Potter is 20.00`);

        });

        it('test calculate price with year before 1980', () => {
            expect(library.calcPriceOfBook('Harry Potter', 1970)).to.be.equal(`Price of Harry Potter is 10.00`);
        });

        it('test invalid parameters and trhow an error', () => {
            expect(() => library.calcPriceOfBook(1, 'a')).to.throw();
            expect(() => library.calcPriceOfBook('Harry Potter', 'a')).to.throw();
            expect(() => library.calcPriceOfBook([], 1990)).to.throw();
        });

        it('test invalid parameters and trhow an error', () => {
            expect(() => library.calcPriceOfBook('Harry Potter', 'a')).to.throw();
        });

        it('test invalid parameters and trhow an error', () => {
            expect(() => library.calcPriceOfBook([], 1990)).to.throw();
        });
    });

    describe('Test findBook', () => {
        it('test findBook when desireBook is in the booksArr', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.be.equal("We found the book you want.");
        });

        it('test findBook when desireBook is not in the booksArr', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Harry Potter")).to.be.equal("The book you are looking for is not here!");
        });

        it('test findBook when length of the booksArr is zero', () => {
            expect(() => library.findBook([], "Harry Potter")).to.be.throw();
        });
    });

    describe('Test arrangeTheBooks', () => {
        it('test is availableSpace is enough', () => {
            expect(library.arrangeTheBooks(5)).to.be.equal("Great job, the books are arranged.");
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.");
        });

        it('test is availableSpace is not enough', () => {
            expect(library.arrangeTheBooks(45)).to.be.equal("Insufficient space, more shelves need to be purchased.");
        });

        it('test invalid input and trhow an error', () => {
            expect(() => library.arrangeTheBooks("45")).to.throw();
            expect(() => library.arrangeTheBooks("a")).to.throw();
            expect(() => library.arrangeTheBooks(-1)).to.throw();
            expect(() => library.arrangeTheBooks(0)).to.throw();
        });
    });
})