function numbersSequesnce(n, k) {
    let arr = [1];

    for (let i = 0; i < n - 1; i++) {
        let startIndex = arr.length - k;
        if (startIndex < 0) {
            startIndex = 0;
        }

        let restArr = arr.slice(startIndex)
        let sum = restArr.reduce((a, b) => a + b);
        arr.push(sum);
        sum = 0
    }

    return arr;

}

console.log(numbersSequesnce(6, 3))
console.log(numbersSequesnce(8, 2))