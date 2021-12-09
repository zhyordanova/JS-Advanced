const { expect } = require('chai');
const sum = require('./sumOfNumbers');

describe('Sum of array', () => {
    it('retuns sum when is multiple numbers', () => {
        expect(sum[2, 3]).to.be.equal(5);
    });

    it('retuns sum when is single number', () => {
        expect(sum[1]).to.be.equal(1);
    });

    it('retuns sum when array is empty', () => { 
        expect(sum([])).to.be.equal(0);
    });
})