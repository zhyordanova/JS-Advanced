function aggregate(array) {
    let numbersArray = array.map(Number);

    let sum = numbersArray.reduce((a, b) => a + b);
    console.log(sum);

    let inverceValueSum = 0
    
    for (let i =0; i < numbersArray.length; i++) {
        inverceValueSum += 1 / numbersArray[i];
    }
    console.log(inverceValueSum);

    let string = numbersArray.reduce((a, b) => (a + b.toString()))
    console.log(string);
}

aggregate([1, 2, 3])
aggregate([2, 4, 8, 16])