function myTicTacToe(matrix) {

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let maxTurns = 9;
    let playerSign = 'X';
    let isGameWon = false;

    for (let i = 0; i < matrix.length; i++) {
        let [row, col] = matrix[i]
            .split(" ")
            .map(Number);

        if (!dashboard[row][col]) {
            dashboard[row][col] = playerSign;

            if (gameWon(dashboard, playerSign)) {
                console.log(`Player ${playerSign} wins!`);
                printResult(dashboard);
                isGameWon = true;
                break;
            }

            playerSign = playerSign === 'X' ? 'O' : 'X';

            maxTurns--;
            if (maxTurns == 0) {
                break;
            }
        } else {
            console.log("This place is already taken. Please choose another!");
        }
    }

    if (!isGameWon) {
        console.log("The game ended! Nobody wins :(");
        printResult(dashboard);
    }

    function gameWon(dashboard, playerSign) {
        let isWinner = false;

        for (let i = 0; i < 3; i++) {
            if (dashboard[i][0] == playerSign && dashboard[i][1] == playerSign && dashboard[i][2] == playerSign) {
                isWinner = true;
                break;
            } else if (dashboard[0][i] == playerSign && dashboard[1][i] == playerSign && dashboard[2][i] == playerSign) {
                isWinner = true;
                break;
            } else {
                if ((dashboard[0][0] === playerSign && dashboard[1][1] === playerSign && dashboard[2][2] === playerSign) ||
                    (dashboard[2][0] === playerSign && dashboard[1][1] === playerSign && dashboard[0][2] === playerSign))
                    isWinner = true;
                break;
            }
        }

        return isWinner;
    }

    function printResult(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
}


myTicTacToe(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);

myTicTacToe(
    ["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);

myTicTacToe(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);