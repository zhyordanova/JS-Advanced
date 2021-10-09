function carFactory(object) {
    const car = {}

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        }else if (power <= 120) {
            return { power: 120, volume: 2400};
        }else {
            return { power: 200, volume: 3500 }
        }
    }

    const properWheelSize = object.wheelsize % 2 == 0 ? --object.wheelsize : object.wheelsize;

    car.model = object.model;
    car.engine = getEngine(object.power);
    car.carriage = {
        type: object.carriage, color: object.color
    };

    car.wheels = new Array(4).fill(properWheelSize, 0, 4);

    return car; 
}


console.log(carFactory(
    { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
))

console.log(carFactory(
    { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
))