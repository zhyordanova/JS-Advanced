function sortedArray(array, command) {

    if (command == 'asc') {
        return array.sort((a,b) => a-b);
    } else {
        return array.sort((a,b) => b-a);
    }
}

console.log(sortedArray(
    [14, 7, 17, 6, 8],
    'asc')
    );

console.log(sortedArray(
    [14, 7, 17, 6, 8],
    'desc'
    ))
    ;