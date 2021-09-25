function walk(steps, footprint, speedKM) {
    const distance = steps * footprint;
    let timeSeconds = Math.round(distance / speedKM * 3.6);
    timeSeconds += Math.floor(distance / 500) * 60;

    let result = new Date(null, null, null, null, null, timeSeconds);
    return result.toTimeString().split(' ')[0];


    // const seconds = time % 60;
    // time -= seconds;
    // time /= 60;
    // const minutes = time % 60;
    // time -= minutes;
    // time /= 60;
    // const hours = time;

    // console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    // function pad(num) {
    //     return ('0' + num).slice(-2);
    // }
}

console.log(walk(4000, 0.60, 5))
console.log(walk(2564, 0.70, 5.5))