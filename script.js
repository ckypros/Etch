let container = document.querySelector('#container');
let grid = document.querySelector('#grid');

init();

function init() {
    let gridSize = 16;
    createGrid(gridSize);
}

function createGrid(gridSize) {
    grid.style.gridTemplateColumns=`repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridCell = document.createElement("div");
        gridCell.classList = "grid-cell";
        gridCell.innerText = i;
        gridCell.addEventListener('mouseenter', function() {
            gridCell.style.backgroundColor = "black";
        });
        grid.appendChild(gridCell);
    }
}


