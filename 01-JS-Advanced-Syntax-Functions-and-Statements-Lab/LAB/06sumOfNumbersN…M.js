function sumOfNumbers(numberN, numberM) {
    a = Number(numberN);
    b = Number(numberM);
    let result = 0;

    for (let i = a; i <= b; i++) {
        result += i;
    }

    console.log(result)
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')