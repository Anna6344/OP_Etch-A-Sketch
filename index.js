let gridSide = 24;
const grid = document.querySelector('#grid');
let i = 0;
let j = 0;

while (i < gridSide) {
  const currentRaw = document.createElement('div');
  currentRaw.classList.add('raw');
  currentRaw.setAttribute('id', `raw${i}`);
  currentRaw.style.height = 100 / gridSide +'vh';
  currentRaw.style.width = '100vh';
  grid.appendChild(currentRaw);
  console.log(i);
  while (j < gridSide) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = 100 / gridSide + 'vh';
    currentRaw.appendChild(cell);
    console.log(j);
    j++;
  };
  i++;
  j = 0;
};