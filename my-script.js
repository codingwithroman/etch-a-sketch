const mainContainer = document.getElementById("mainContainer");

function generateGrid(e) {
    let gridDimension = 16;
    let gridContent = gridDimension * gridDimension;

    for (let i = 0; i < gridContent; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
    }
}
