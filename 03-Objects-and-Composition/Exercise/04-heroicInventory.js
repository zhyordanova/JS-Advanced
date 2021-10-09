function heroicInventory(array) {
    const hero = [];

    array.forEach((el) => {
        let [name, level, items] = el.split(' / ');
        hero.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        })
    })
    
    return JSON.stringify(hero);
}


console.log(heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))

console.log(heroicInventory(
    ['Jake / 1000 / Gauss, HolidayGrenade']
))