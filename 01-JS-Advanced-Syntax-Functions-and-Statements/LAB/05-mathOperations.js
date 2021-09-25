function mathOperations(number1, number2, operator) {
    let result = `${number1} ${operator} ${number2}`
    result = result.split(' ')
    result = eval(result.join(" "))

    console.log(result)
}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')
