document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    // Whose turn is it? X goes first.
    let currentPlayer = "X";

    // Nine empty slots, one per square
    const gameState = ["", "", "", "", "", "", "", "", ""];

    squares.forEach(function (square, index) {
        // style each square
        square.classList.add("square");

        //  handle clicks
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            gameState[index] = currentPlayer;

            // Switch turns
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
});