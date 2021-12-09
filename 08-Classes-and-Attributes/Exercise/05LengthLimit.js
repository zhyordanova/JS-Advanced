class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }

        return this.innerString.slice(0, this.innerLength) +
            (this.innerLength < this.innerString.length ? '.'.repeat(this.innerString.length - this.innerLength) : '');
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); 

test.decrease(3);
console.log(test.toString()); 

test.decrease(5);
console.log(test.toString()); 

test.increase(4); 
console.log(test.toString());
