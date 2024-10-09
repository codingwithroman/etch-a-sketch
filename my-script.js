const mainContainer = document.getElementById("mainContainer");

function generateGrid(heightWidth) {
    let gridDimension;

    if (heightWidth) {
        gridDimension = heightWidth;
    } else {
        gridDimension = 16;
    }

    let containerSize = 650 / gridDimension;

    for (let i = 0; i < gridDimension * gridDimension; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${containerSize}px`;
        square.style.height = `${containerSize}px`;
        
        mainContainer.appendChild(square);
    }
}

generateGrid();

const squares = document.getElementsByClassName("square");



// Array.from(squares).forEach(function(div) {
//     div.addEventListener("mouseover", (event) => {
//         div.style.backgroundColor = "black";
//         console.log(event);
//     })
// })

mainContainer.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "black";
    }
})



const buttons = document.querySelectorAll("button");


//make buttons delete current grid and generate a grid that's as high and wide as the input of prompt
Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", () => {
        document.querySelectorAll(".square").forEach(div => div.remove());
        
        const heightWidth = prompt("Type a number 0-100:");
        
        generateGrid(heightWidth);
    })
})

