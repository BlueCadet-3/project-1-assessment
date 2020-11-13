// App State Variables

let runningTotal;

// Cached Elements

const numInputEl = document.getElementById('numInput');
const totalEl = document.getElementById('runningTotal');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');

// Event Listeners

addBtn.addEventListener('click', sumClick);
subtractBtn.addEventListener('click', subtractClick);

// Functions

function init() {
  runningTotal = 0;
  numInputEl.value = 1;
  render();
}

function sumClick() {
  let input1 = parseInt(numInputEl.value);
  runningTotal += input1;
  render();
}

function subtractClick() {
  let input1 = parseInt(numInputEl.value);
  runningTotal -= input1;
  render();
}

function render() {
  if(runningTotal > 0) {
    totalEl.style.color = 'green';
    totalEl.textContent = '+' + runningTotal;
  } else if(runningTotal < 0) {
    totalEl.style.color = 'red';
    totalEl.textContent = runningTotal;
  }
}

init();