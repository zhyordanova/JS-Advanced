function add(num) {
    let result = num;

    function sum(num2) {
        result += num2;
        return sum
    }

    sum.toString = () => {
        return result;
    }

    return sum;
}


console.log(add(1)(6)(-3).toString());