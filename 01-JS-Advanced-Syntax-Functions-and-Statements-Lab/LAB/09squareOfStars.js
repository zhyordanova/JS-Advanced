function stars(n) {
    if (n == undefined) {
        n = 5;
    }

    let result = ''

    for (let i = 0; i < n; i++) {
        result += `${"* ".repeat(n)}\n`
    }

    console.log(result)
}

stars(1)
stars(2)
stars(5)
stars()