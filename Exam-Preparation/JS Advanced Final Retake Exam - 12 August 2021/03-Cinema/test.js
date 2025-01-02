const { expect } = require('chai');
const cinema = require('./cinema');

describe('Test cinema', () => {
    describe('showMovies', () => {
        it('test show movie without given movies array', () => {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

        it('test show movie with given movies array', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });

    describe('ticketPrice', () => {
        it('test the ticket price when the project type is in the schedule', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });

        it('test the ticket price when the project type is not in the schedule', () => {
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice('prem')).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('test swap seats when the given place numbers are floating numbers', () => {
            expect(cinema.swapSeatsInHall(1.25, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.25, 5.5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 5.5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when the given place numbers are less than or equal to zero', () => {
            expect(cinema.swapSeatsInHall(0, -5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, -5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 3)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when the given place numbers are greater than tweenty', () => {
            expect(cinema.swapSeatsInHall(21, 22)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(19, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 19)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when the given place numbers are equal', () => {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when one of the first params is not a number', () => {
            expect(cinema.swapSeatsInHall([], 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall({}, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(true, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(null, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(undefined, 5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when one of the second params is not a number', () => {
            expect(cinema.swapSeatsInHall(5, [])).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, {})).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, true)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, null)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, undefined)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, '')).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats with only one params', () => {
            expect(cinema.swapSeatsInHall(5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats with not an integer', () => {
            expect(cinema.swapSeatsInHall(5, '5')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('5', 5)).to.be.equal('Unsuccessful change of seats in the hall.');
        });

        it('test swap seats when the given place numbers are different and pla change is successful', () => {
            expect(cinema.swapSeatsInHall(5, 7)).to.be.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal('Successful change of seats in the hall.');
        });
    });
})