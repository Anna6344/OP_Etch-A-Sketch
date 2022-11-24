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
			cell.style.backgroundColor = 'rgb(255, 255, 255)';
			cell.style.width = 100 / gridSide + 'vh';
			currentRaw.appendChild(cell);
			console.log(j);
			j++;
		};
		i++;
		j = 0;
	}
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let k = 0; k < 6; k++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function darkenColor(curColor) {
	colSubStr = curColor.slice(4, -1);
	colElem = colSubStr.split(",");
	newColArr = colElem.map(decrPerc);
	newColStr = newColArr.join(', ');
	console.log(newColStr);
	newColor = `rgb(${newColStr})`;
	return newColor;
}

function decrPerc(num) {
	let delta = Math.round(Number(num) / 3);
	let newNum = Number(num) - delta;
	if (newNum <= 4) {
		newNum = 0;
	};
	console.log(newNum);
	return newNum;
}

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
					if (cell.style.backgroundColor === 'rgb(255, 255, 255)') {
						cell.style.backgroundColor = `${getRandomColor()}`;
					} else {
						let curColor = cell.style.backgroundColor; 
						cell.style.backgroundColor = `${darkenColor(curColor)}`;
					}
				});
		});
	};
});