const container = document.querySelector('#container');
function createDivs(amount) {
  for (var i = 0; i < (amount*amount); i++) {
    let div = document.createElement('div')
    container.appendChild(div)
    div.onmouseover = function() {
      div.setAttribute('style', 'background-color: black')
    }
  }
};
createDivs(13);
