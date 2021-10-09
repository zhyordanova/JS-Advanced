function population(towsnAsStrings) {
    const towns = {};

    for (let data of towsnAsStrings) {
        const tokens = data.split(' <-> ');
        const city = tokens[0];
        let population = Number(tokens[1]);

        if (towns[city]) {
            population += towns[city];
        }
        towns[city] = population;
    }

    for (const [city, pop] of Object.entries(towns)) {
        console.log(`${city} : ${pop}`);
    }
}


population(
    ['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

population(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);