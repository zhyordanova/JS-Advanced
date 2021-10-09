function lowestPrices(array) {
    let catalog = {};

    array.forEach((el) => {
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if (!catalog[product]) {
            catalog[product] = {};
        }

        catalog[product][town] = price;
    })

    for (const prod in catalog) {
        const sorted = Object.entries(catalog[prod]).sort((a, b) => a[1] - b[1]);

        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}


lowestPrices(
    ['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)