const grid = document.querySelector('#grid');
// This function creates the initial grid
function drawGrid(amount) {
  for (var i = 0; i < (amount*amount); i++) {
    let div = document.createElement('div')
    div.classList.add('pixel');
    grid.appendChild(div);
    div.addEventListener('mouseover', function(event) {
      const userColor = document.getElementById('colorChoice');
      event.target.style.background = userColor.value;
    });
  }
  document.documentElement.style.setProperty("--columnNumber", amount);
};
// This function clears the grid entirely
function deleteGrid() {
  const grid = document.querySelector('#grid')
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild)
  }
};
// This function resets the grid according to user input
function resetGrid() {
  let userAmount = prompt('Enter grid size')*1;
  if (userAmount > 60) {
    alert('Beware, a grid this small will probalby look like shit')
  }
  deleteGrid();
  drawGrid(userAmount);
}

drawGrid(16);
