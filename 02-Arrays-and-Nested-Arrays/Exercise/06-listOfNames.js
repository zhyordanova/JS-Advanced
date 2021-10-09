function solve(array) {
    const result = array.sort((a, b) => a.localeCompare(b));

    result.forEach((element, index) => {
        console.log(`${++index}.${element}`)
    })
}

solve(["John", "Bob", "Christina", "Ema"]);