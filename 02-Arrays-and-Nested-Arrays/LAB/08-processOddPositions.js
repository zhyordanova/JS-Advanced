const solve = (numbers) => numbers
    .filter((value, index) => index % 2 == 1)
    .map(x => x * 2)
    .reverse()
    .join(' ');


console.log(solve(
    [10, 15, 20, 25]
));
    
console.log(solve(
    [3, 0, 10, 4, 7, 3]
));
    
