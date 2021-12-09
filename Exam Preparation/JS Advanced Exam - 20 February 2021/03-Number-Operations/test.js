const { expect } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');


describe('Test number operations', () => {
    describe('powNumber', () => {
        it('test pow number',() => {
            expect(numberOperations.powNumber(3)).to.be.equal(9);            
            expect(numberOperations.powNumber(1.5)).to.be.equal(2.25);            
            expect(numberOperations.powNumber(-2)).to.be.equal(4);            
            expect(numberOperations.powNumber(0)).to.be.equal(0);            
        });
    });

    describe('numberChecker', () => {
        it('test number checker with incorrent input', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        });

        it('test number checker with input less than 100', () => {
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('99')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.be.equal('The number is lower than 100!');
        });

        it('test number checker with input greater than 100', () => {
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101')).to.be.equal('The number is greater or equal to 100!');
        });
    });

    describe('sumArrays', () => {
        it('test the sum of the array', () => {
            expect(numberOperations.sumArrays([1, 3], [3, 1])).to.deep.equal([4, 4]);
            expect(numberOperations.sumArrays([1, 2, 3], [3, 1])).to.deep.equal([4, 3, 3]);
        });
    });
})