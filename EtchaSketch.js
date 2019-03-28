// Hayley Tillery JavaScript Etch a Sketch


const container = document.querySelector('#container');




// Function that changes background to black:
function fillCell() {  
    this.style.background = 'black';
}



// Function that creates multiple divs
function gridMaker() {
    container.style.gridTemplate = 'repeat(16, 1fr) / repeat(16, 1fr)';
    for(let i = 0; i < 16 * 16 ; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-cell');
        // grid.style.border = '1px solid black';
        // grid.textContent = i + 1;
        grid.addEventListener('mouseenter', fillCell);
        container.appendChild(grid);
    }
}




// Creates grid by calling function that makes the divs:
gridMaker();

// Reset button that clears fill color and changes size back to default
const resetbtn = document.querySelector('#reset-button');
resetbtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("container-shake");
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => cell.style.background = 'gray');
    while (container.hasChildNodes()) {   
        container.removeChild(container.firstChild);
      }
    gridMaker();
});

// Removes the animation class
container.addEventListener('animationend', (e) => {
    container.classList.remove('container-shake');
});

// Resize button

const resizebtn = document.querySelector('#resize-button');
resizebtn.addEventListener('click', () => {
    let newSize = Number(prompt('How many squares on each side do you want?'));
    while (container.hasChildNodes()) {   
        container.removeChild(container.firstChild);
      }
    container.style.gridTemplate =`repeat(${newSize}, 1fr) / repeat(${newSize}, 1fr)`;
    for(let i = 0; i < newSize * newSize ; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-cell');
        // grid.style.border = '1px solid black';
        // grid.textContent = i + 1;
        grid.addEventListener('mouseenter', fillCell);
        container.appendChild(grid);
    }
});

