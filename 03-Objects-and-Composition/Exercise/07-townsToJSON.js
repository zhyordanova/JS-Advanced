function towns(array) {
    let data = array
    .map(row => row.split('|')
    .filter(x => x != "")
    .map(x => x.trim()));

    let properties = data.shift();

    let result = [];

    data.forEach(row => {
        let town = {
            [properties[0]]: row[0],
            [properties[1]]: Number(Number(row[1]).toFixed(2)),
            [properties[2]]: Number(Number(row[2]).toFixed(2)),
        };
        result.push(town);
    });

    console.log(JSON.stringify(result));
}


towns(
    ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)

towns(
    ['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)