function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    array = array.slice(0, 2);

    console.log(array.join(' '));
}


smallestTwoNumbers(
    [30, 15, 50, 5]
    );
    
smallestTwoNumbers(
    [3, 0, 10, 4, 7, 3]
    );
    