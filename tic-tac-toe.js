document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    // X goes first
    let currentPlayer = "X";

    // Nine empty slots, one per square
    const gameState = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function (square, index) {
        // Exercise 1: style each square
        square.classList.add("square");

        // Exercise 2: handle clicks
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            // Switch turns
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });
});
