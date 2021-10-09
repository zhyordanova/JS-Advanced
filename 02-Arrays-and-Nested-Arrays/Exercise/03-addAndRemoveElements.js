function solve(array) {
    let result = [];
    let number = 0

    array.forEach((element) => {
        if (element == 'add') {
            result.push(number + 1);
        } else {
            result.pop();
        }

        number++
    })



    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(
    ['add',
    'add',
    'add',
    'add']
);

solve(
    ['add',
    'add',
    'remove',
    'add',
    'add']
);

solve(
    ['remove',
    'remove',
    'remove']
);