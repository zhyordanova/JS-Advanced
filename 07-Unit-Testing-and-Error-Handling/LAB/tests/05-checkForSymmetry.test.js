const { expect } = require('chai');
const isSymmetric = require('../checkForSymmetry')

describe('Symetry checkered', () => {
    it('returns true for symetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symetri array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('returns false for non-array', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('returns false for type-different symetric array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });

    it('returns true for symetric array with odd number of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('returns true for symetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('returns false for non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('returns flase for string parmeter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
})