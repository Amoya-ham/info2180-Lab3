document.addEventListener("DOMContentLoaded", function () {
    // Find every div inside the board
    const squares = document.querySelectorAll("#board div");

    // Give each one the "square" class so the CSS styles it
    squares.forEach(function (square) {
        square.classList.add("square");
    });
});
