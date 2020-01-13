let container = document.querySelector('#container');
let grid = document.querySelector('#grid');

let gridSize;

init();

function init() {
    gridSize = 16;
    createGrid(gridSize);
    initButtons();
}

function createGrid(gridSize) {
    grid.style.gridTemplateColumns=`repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        setupBlackMouseOver(gridCell);
        grid.appendChild(gridCell);
    }
}

function setupBlackMouseOver(element) {
    element.addEventListener('mouseenter', function() {
        element.style.backgroundColor = "black";
    });
}

function clearGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function initButtons() {
    let newGridButton = document.querySelector('#new-grid-button');
    newGridButton.addEventListener('click', function() {
        clearGrid();
        gridSize = prompt("Please enter a grid dimension:");
        createGrid(gridSize);
    });

    let clearButton = document.querySelector('#clear-grid-button');
    clearButton.addEventListener('click', function() {
        clearGrid();
        createGrid(gridSize);
    });
}
