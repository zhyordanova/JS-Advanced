const { expect } = require('chai');
const isOddOrEven = require('../02-evenOrOdd');

describe('Test evenOrOdd', () => {

    describe('Happy case', () => {

        it('test if even is returned', () => {
            expect(isOddOrEven("asdf")).to.be.equal("even");
            expect(isOddOrEven("")).to.be.equal("even");
        });

        it('test if odd is returned', () => {
            expect(isOddOrEven("asd")).to.be.equal("odd");
        });
    })

    describe('Invalid cases', () => {
        it('test invalid inputs', () => {
            expect(isOddOrEven(1)).to.be.undefined;
            expect(isOddOrEven({})).to.be.undefined;
            expect(isOddOrEven([])).to.be.undefined;
        });
    })
})