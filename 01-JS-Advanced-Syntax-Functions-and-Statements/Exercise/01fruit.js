function fruits(fruit, weight, price) {
    let weightInKG = weight / 1000;
    money = (weightInKG * price).toFixed(2);

    console.log(`I need $${money} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}

fruits('orange', 2500, 1.80)
fruits('apple', 1563, 2.35)