const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('Test numbers', () => {
    describe('sumNumbers', () => {
        it('test sum numbers when the given parameters are invalid', () => {
            expect(testNumbers.sumNumbers('1', 1)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, '1')).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, [])).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, {})).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(1, undefined)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers([], 1)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers({}, 1)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(null, 1)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, 1)).to.be.equal(undefined);
        });

        it('test sum numbers when the given parameters are valid and positive number', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.be.equal('2.00');
            expect(testNumbers.sumNumbers(1, 1.5)).to.be.equal('2.50');
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.be.equal('3.00');
        });

        it('test sum numbers when the given parameters are valid and positive number', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.be.equal('-1.00');
            expect(testNumbers.sumNumbers(-1, 1.5)).to.be.equal('0.50');
            expect(testNumbers.sumNumbers(-1, -1.5)).to.be.equal('-2.50');
        });
    });

    describe('numberChecker', () => {
        it('test if the input is a number', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!');
        });

        it('test if the input is even', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!')
            expect(testNumbers.numberChecker(0)).to.be.equal('The number is even!')
        });

        it('test if the input is odd', () => {
            expect(testNumbers.numberChecker(1)).to.be.equal('The number is odd!')
        });
    });

    describe('averageSumArray', () => {
        it('test the average sum of array', () => {
            expect(testNumbers.averageSumArray([3, 3, 3])).to.be.equal(3);
        });
    });
})