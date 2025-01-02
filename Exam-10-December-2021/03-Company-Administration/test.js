const { expect } = require('chai');
const { calculateSalary } = require('./companyAdministration');
const companyAdministration = require('./companyAdministration');

describe('Test Company Administration functionaly', () => {
    describe('hiringEmployee', () => {
        it('test when different position than Programmer is given', () => {
            expect(() => companyAdministration.hiringEmployee('Test name', 'Test position', 3)).to.throw(`We are not looking for workers for this position.`);
        });

        it('test when the position is Programmer but the experiene is less than 3 year', () => {
            expect(companyAdministration.hiringEmployee('Test name', 'Programmer', 2)).to.be.equal(`Test name is not approved for this position.`);
        });

        it('test when the position is Programmer but the experiene is exactly 3 year', () => {
            expect(companyAdministration.hiringEmployee('Test name', 'Programmer', 3)).to.be.equal(`Test name was successfully hired for the position Programmer.`);
        });

        it('test when the position is Programmer but the experiene is greater than 3 year', () => {
            expect(companyAdministration.hiringEmployee('Test name', 'Programmer', 4)).to.be.equal(`Test name was successfully hired for the position Programmer.`);
        });
    });

    describe('calculateSalary', () => {
        it('test if the given hours is a number', () => {
            expect(() => companyAdministration.calculateSalary('')).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary([])).to.throw(`Invalid hours`);
            expect(() => companyAdministration.calculateSalary({})).to.throw(`Invalid hours`);
        });

        it('test if the given hours is a negative number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(`Invalid hours`);
        });

        it('test calculating of the salary with less than 160 hours', () => {
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500)
        });

        it('test calculating of the salary with exact 160 hours', () => {
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500)
        });

        it('test calculating of the salary with more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415)
        });
    });

    describe('firedEmployee', () => {
        it('test is array of employees is given', () => {
            expect(() => companyAdministration.firedEmployee('Test', 3)).to.throw(`Invalid input`);
        });

        it('test if the index is valid', () => {
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], 3.3)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], [])).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], {})).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], 'test')).to.throw(`Invalid input`);
        });

        it('test if index in in range', () => {
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], 3)).to.throw(`Invalid input`);
            expect(() => companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], -1)).to.throw(`Invalid input`);
        });

        it('test fired employee with correct input', () => {
            expect(companyAdministration.firedEmployee(['Test', 'Test1'], 1)).to.deep.equal('Test');
            expect(companyAdministration.firedEmployee(['Test', 'Test1', 'Test2'], 2)).to.deep.equal('Test, Test1');
        });
    });
})