class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (let vegetable of vegetables) {
            const type = vegetable.split(' ')[0];
            const quantity = Number(vegetable.split(' ')[1]);
            const price = Number(vegetable.split(' ')[2]);

            if (this.availableProducts.some(p => p.type == type) == false) {
                this.availableProducts.push({ type, quantity, price });
            } else {
                if (this.availableProducts.quantity < quantity) {
                    this.availableProducts.quantity += quantity;
                    this.availableProducts.price += price;
                }

                this.availableProducts.quantity += quantity;
                this.availableProducts.price += price;
            }    
        }
        
        for (let i of this.availableProducts) {
            this.products.push(i.type)
        }

        return `Successfully added ${this.products.join(', ')}`
    }

    buyingVegetables (selectedProducts) {
        for (let s of selectedProducts){
            const type = selectedProducts.split(' ')[0];
            const quantity = Number(selectedProducts.split(' ')[1]);

            
        const totalPrice = quantity * price;
        if (this.availableProducts.hasOwnProperty(type) == false) {
            throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`);
        } else if (this.availableProducts.quantity < quantity) {
            this.availableProducts.quantity -= quantity
            throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`);
        }

        return `Great choice! You must pay the following amount ${totalPrice.toFixed(2)}.`

        }
    }

    rottingVegetable (type, quantity) {
        quantity = Number(quantity);

        if (this.availableProducts.some(p => p.type == type) == false){
            throw new Error(`${type} is not available in the store.`);
        }

        if (this.availableProducts.quantity < quantity) {
            this.availableProducts.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            this.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision () {
        let result = [];

        result.push(`Available vegetables:`);

        const sortedList = this.availableProducts.sort((a, b) => a.price - b.price);

        for (let p of sortedList) {
            result.push(`${p.type}${p.quantity}-$${p.price}`);
        }

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
