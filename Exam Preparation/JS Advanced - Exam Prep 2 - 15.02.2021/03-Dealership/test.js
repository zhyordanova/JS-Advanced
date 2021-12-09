const { expect } = require('chai');
const dealership = require('./dealership');

describe('Test dealership functionality', () => {
    describe('newCarCost', () => {
        it('Test new car cost when your old car is in the discountForOldCar list', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.be.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.be.equal(5000);
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.be.equal(16000);
        });

        it('Test new car cost when your old car is not in the discountForOldCar list', () => {
            expect(dealership.newCarCost('BMW', 30000)).to.be.equal(30000);
        });
    });

    describe('carEquipment', () => {
        it('Test returns all selected extras', () => {
            expect(dealership.carEquipment(['navigation'], [0])).to.deep.equal(['navigation']);
        });

        it('Test returns all selected extras', () => {
            expect(dealership.carEquipment(['navigation', 'heated seats', 'sliding roof', 'sport rims'], [0, 2])).to.deep.equal(['navigation', 'sliding roof']);
        });
    });

    describe('euroCategory', () => {
        it('Test euroCar price when the category is below 4', () => {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('Test euroCar price when the category is above 4', () => {
            expect(dealership.euroCategory(5)).to.be.equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('Test euroCar price when the category is exactly 4', () => {
            expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });
})