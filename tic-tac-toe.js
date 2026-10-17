document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    // Remember the original message so we can restore it
    const originalMessage = status.textContent;

    // X goes first.
    let currentPlayer = "X";

    // Nine empty slots, one per square
    const gameState = ["", "", "", "", "", "", "", "", ""];

    // The 8 ways to win
    const winningLines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    // Returns "X" or "O" if someone has won, otherwise null
    function checkWinner() {
        for (const line of winningLines) {
            const [a, b, c] = line;
            if (gameState[a] !== "" &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    squares.forEach(function (square, index) {
        //  style each square
        square.classList.add("square");

        // handle clicks
        square.addEventListener("click", function () {
            //  ignore clicks on filled squares
            if (gameState[index] !== "") {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                status.textContent = "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        // hover effect
        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });
    });

    //  restart the game
    newGameButton.addEventListener("click", function () {
        squares.forEach(function (square, index) {
            square.textContent = "";
            square.classList.remove("X", "O");
            gameState[index] = "";
        });

        currentPlayer = "X";
        status.textContent = originalMessage;
        status.classList.remove("you-won");
    });
});