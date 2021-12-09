const { expect } = require('chai');
const lookupChar = require('./03-charLookup');

describe('Test character lookup', () => {
    describe('check function for incorect input type', () => {
        it('return undefined if first parameter is not a string', () => {
            expect(lookupChar(undefined, 1)).to.be.undefined;
            expect(lookupChar(1, 2)).to.be.undefined;
            expect(lookupChar([], 2)).to.be.undefined;
        });

        it('return undefined if second parameter is not a number', () => {
            expect(lookupChar('string', undefined)).to.be.undefined;
            expect(lookupChar('string', null)).to.be.undefined;
            expect(lookupChar('string', '1')).to.be.undefined;
            expect(lookupChar('string', 2.39)).to.be.undefined;
            expect(lookupChar('string', [])).to.be.undefined;
        });
    });

    describe('check function for incorect index', () => {
        it('return incorrect index when index is out of range', () => {
            expect(lookupChar('string', -1)).to.be.equal('Incorrect index');
            expect(lookupChar('string', 6)).to.be.equal('Incorrect index');
        });
    });

    describe('check function for valid parameters', () => {
        it('return correct character when both parameters is valid', () => {
            expect(lookupChar('string', 0)).to.be.equal('s');
            expect(lookupChar('string', 5)).to.be.equal('g');
        });
    });
})