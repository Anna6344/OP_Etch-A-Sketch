let gridSide;
const grid = document.querySelector('#grid');
const btn = document.querySelector('#btn');
let i = 0;
let j = 0;

function drawGrid (gridSide){
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
	}
};

btn.addEventListener('click', () => {
	while (grid.hasChildNodes()) {
		grid.removeChild(grid.firstChild);
	}
  gridSide = prompt('Size of the grid');
	if (gridSide > 100) {
		alert("Max size is 100!");
	} else {
		drawGrid(gridSide);
		i = 0;
		const cells = document.querySelectorAll('.cell');
		cells.forEach((cell) => {
				cell.addEventListener('mouseover', () => {
					cell.style.backgroundColor = 'black';
				});
		});
	}
});




