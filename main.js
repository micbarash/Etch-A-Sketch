const grid = document.querySelector('#grid');
function createDivs(amount) {
  amount = prompt('Choose grid size');
  for (var i = 0; i < (amount*amount); i++) {
    let div = document.createElement('div')
    grid.appendChild(div)
    div.onmouseover = function() {
      div.setAttribute('style', 'background-color: black')
    }
  }
  document.documentElement.style.setProperty("--columnNumber", amount);
};
createDivs();
