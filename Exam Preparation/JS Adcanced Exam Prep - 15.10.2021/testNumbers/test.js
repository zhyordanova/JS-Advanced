const { expect } = require('chai');
const testNumbers = require('./testNumbers');

describe('Test Numbers', () => {
    describe('sumNumbers', () => {
        it('works with valid parameters', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00');
        })

        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.be.equal('-1.00');
            expect(testNumbers.sumNumbers(-1, 2)).to.be.equal('1.00');
        });

        it('works with floting numbers', () => {
            expect(testNumbers.sumNumbers(1.05, 2.45)).to.be.equal('3.50');
            expect(testNumbers.sumNumbers(-1.05, 2.45)).to.be.equal('1.40')
        });

        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
        });

    });

    describe('numberChecker', () => {
        it('works with even values', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');
        });

        it('works with even values as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');
        });

        it('works with empty string', () => {
            expect(testNumbers.numberChecker('')).to.contain('even');
        });

        it('works with odd values', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd');
        });

        it('works with odd values as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd');
        });

        it('detect invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });

    });

    describe('averageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
        });

        it('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.be.equal(2.5);
        });
    });
})