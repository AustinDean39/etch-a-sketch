// INITIALIZE THE CANVAS WITH A 16X16 GRID
createCanvas(16);

// FUNCTION TO FILL THE CANVAS WITH CORRECT NUMBER OF SQUARES
function createCanvas(squares) {
  const canvas = document.getElementById('canvas');
  for (let i = 0; i < squares; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < squares; i++) {
      const column = document.createElement('div');
      column.classList.add('column');
      row.appendChild(column);
    }
    canvas.appendChild(row);
  }

  // ADD EVENT LISTENERS TO CHANGE THE GRID'S COLORS
  const columns = Array.from(document.getElementsByClassName('column'));
  columns.forEach(square => {
    square.addEventListener('mousedown', changeColor);
    square.addEventListener('mouseover', (event) => {
      if (event.buttons == 1) {
        changeColor(event);
      };

    });

  });

  return;
}

// FUNCTION TO CHANGE BACKGROUND COLOR OF AN ELEMENT TO A RANDOM COLOR
function changeColor(event) {
  event.target.style.background = randomColor();
}

// FUNCTION TO DETERMINE A RANDOM RGB() COLOR VALUE
function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  const colorValue = `rgb(${red}, ${blue}, ${green})`;
  return colorValue;
}