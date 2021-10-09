function roadRadar(speed, area) {
    let speedLimit = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    let difference = speed - speedLimit;

    if (difference <= 0) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`
    }

    let status = "";

    if (difference <= 20) {
        status = "speeding";
    } else if (difference > 20 && difference <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
}

console.log(roadRadar(40, 'city'))
console.log(roadRadar(21, 'residential'))
console.log(roadRadar(120, 'interstate'))
console.log(roadRadar(200, 'motorway'))