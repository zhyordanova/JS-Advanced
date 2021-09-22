function sameNumber(number) {
    const string = number.toString();
    let isSame = true;
    let sum = parseInt(string[0]);

    for (let i = 1; i < string.length; i++) {

        if (string[i] !== string[i - 1] && string[i - 1] !== undefined) {
            isSame = false;
        }

        sum += parseInt(string[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumber(2222222)
sameNumber(1234)