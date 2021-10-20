const { expect } = require('chai');
const createCalculator = require('./addSubtract');

describe('Calculator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('should has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('starts empty', () => {
        expect(instance.get()).to.equal(0);
    })

    it('adds single positive number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('adds single negative number', () => {
        instance.add(-1);
        expect(instance.get()).to.equal(-1);
    });

    it('adds multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('adds correctly with a positive number as string', () => {
        instance.add('3')
        expect(instance.get()).to.be.equal(3);
    });

    it('adds correctly with a negative number as string', () => {
        instance.add('-3')
        expect(instance.get()).to.be.equal(-3);
    });

    it('adds correctly with a floating point number', () => {
        instance.add(3.5)
        expect(instance.get()).to.be.equal(3.5);
    });

    it('substract single positive number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('substract single negative number', () => {
        instance.subtract(-1);
        expect(instance.get()).to.equal(1);
    });

    it('substract multiple numbers', () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it('subtracts correctly with a positive number as string', () => {
        instance.subtract('3')
        expect(instance.get()).to.be.equal(-3);
    });

    it('subtracts correctly with a negative number as string', () => {
        instance.subtract('-3')
        expect(instance.get()).to.be.equal(3);
    });

    it('subtracts correctly with a floating point number', () => {
        instance.subtract(3.5)
        expect(instance.get()).to.be.equal(-3.5);
    });

    it('adds and substract numbers', () => {
        instance.add(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-1);
    });

    it('adds and substract numbers as strings', () => {
        instance.add('1');
        instance.subtract('2');
        expect(instance.get()).to.equal(-1);
    });

    it('works correctly when several functions are called with a floating and an integer value', () => {
        instance.add(3)
        instance.subtract(3.5)
        expect(instance.get()).to.be.equal(-0.5);
    });

    it('the sum cannot be modified', () => {
        instance.value = 2;
        expect(instance.get()).to.be.equal(0);
    });

    it('add returns NaN with a string value', () => {
        instance.add('a');
        expect(instance.get()).to.be.NaN;
    });

    it('add returns NaN with an objet value', () => {
        instance.add({});
        expect(instance.get()).to.be.NaN;
    });

    it('subtract returns NaN with a string value', () => {
        instance.subtract('a');
        expect(instance.get()).to.be.NaN;
    });

    it('subtract returns NaN with an objet value', () => {
        instance.subtract({});
        expect(instance.get()).to.be.NaN;
    });

    it('subtract returns NaN without input value', () => {
        instance.subtract();
        expect(instance.get()).to.be.NaN;
    });

    it('add returns NaN without input value', () => {
        instance.add();
        expect(instance.get()).to.be.NaN;
    });
})