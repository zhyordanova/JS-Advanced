class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer,
            this.location = location,
            this.priceForTheCamp = {
                child: 150,
                student: 300,
                collegian: 500
            }
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) == false) {
            throw new Error('Unsuccessful registration at the camp.');

        } else if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;

        } else if (Number(money) < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        };

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        if (this.listOfParticipants.some(p =>p.name == name) == false) {
            throw new Error(`The ${name} is not registered in the camp.`);

        } 

        const person = this.listOfParticipants.some(p => p.name == name);
        this.listOfParticipants.splice(person, 1);

        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let playerOne = this.listOfParticipants.find(p => p.name == participant1);

        if (!playerOne) {
            throw new Error(`Invalid entered name/s.`);
        } 

        if (typeOfGame == 'Battleship') {
            playerOne.power += 20;
            return `The ${playerOne.name} successfully completed the game ${typeOfGame}.`;
        }

        if (typeOfGame == 'WaterBalloonFights') {

            let playerTwo = this.listOfParticipants.find(p => p.name == participant2);

            if (!playerOne || !playerTwo) {
                throw new Error(`Invalid entered name/s.`);
            }  else if (playerOne.condition != playerTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (playerOne.power > playerTwo.power) {
                playerOne.wins ++;
                return `The ${playerOne.name} is winner in the game ${typeOfGame}.`;
            } else if (playerOne.power < playerTwo.power) {
                playerTwo.wins ++;
                return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`
            }
        }
    }

    toString () {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        const sortedList = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for(let player of sortedList){
            result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
        }

        return result.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));




