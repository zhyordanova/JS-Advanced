class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
        const participants = {};
    }

    registerParticipant (name, condition, money) {
        if (!Object.keys(this.priceForTheCamp).includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        } else if (priceForTheCamp[condition] < money) {
            return `The ${name} is already registered at the camp.`
        }
        
        if (!this.listOfParticipants.some(p => p['name'])) {
            this.listOfParticipants.push({
                'name': name,
                'condition': condition,
                'power': 100, 
                'wins': 0
            });

            return `The ${name} was successfully registered.`
        } else {
            return `The ${name} is already registered at the camp.`
        }


    }


    unregisterParticipant (name) {

    }

    timeToPlay (typeOfGame, participant1, participant2) {

    }

    toString () {

    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 500));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
