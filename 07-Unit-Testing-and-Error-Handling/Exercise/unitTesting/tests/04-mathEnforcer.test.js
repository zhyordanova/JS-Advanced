const { expect } = require('chai');
const mathEnforcer = require('./04-mathEnforcer')

describe('Test math forcer object performance mathematical operations', () => {
    describe('Test addFive performance', () => {
        it('check function addFive for incorect input type', () => {
            expect(mathEnforcer.addFive('4')).to.be.undefined;
            expect(mathEnforcer.addFive('sdfg')).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
        });

        it('check function addFive for correct input type', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        });
    });

    describe('Test subtractTen performance', () => {
        it('check function subtractTen for incorrect input type', () => {
            expect(mathEnforcer.subtractTen('4')).to.be.undefined;
            expect(mathEnforcer.subtractTen('sdfg')).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        });

        it('check function subtractTen for correct input type', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
    });

    describe('Test sum peformance', () => {
        it('check function sum for incorrect input type', () => {
            expect(mathEnforcer.sum('4', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
            expect(mathEnforcer.sum('s', 'd')).to.be.undefined;
            expect(mathEnforcer.sum([1, 2])).to.be.undefined;
        });

        it('check function sum for correct input type', () => {
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.equal(3.0);
            expect(mathEnforcer.sum(-10.5, -10.5)).to.be.equal(-21.0);
        });
    });
})