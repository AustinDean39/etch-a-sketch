// INITIALIZE THE CANVAS WITH A 16X16 GRID
createCanvas(16);

// CONNECT THE SLIDER INPUT TO THE CANVAS SIZE
const sizeSetting = document.getElementById('canvas-size-input');
const resetCanvasBtn = document.getElementById('reset-button');

updateSizeText();

resetCanvasBtn.addEventListener('click', function () {
  createCanvas(sizeSetting.value);
});

// DISPLAY CHOSEN SIZE BENEATH THE SLIDER, UPDATE AS NEEDED
sizeSetting.addEventListener('input', updateSizeText);

// CONNECT THE COLOR INPUT TO THE CANVAS
const colorPicker = document.getElementById('color-picker');
const randomColorBtn = document.getElementById('random-color-btn');

// EVENT LISTENER FOR RANDOM COLOR BUTTON
randomColorBtn.addEventListener('click', () => {
  colorPicker.value = randomHexColor();
})

// FUNCTION TO UPDATE TEXT UNDERNEATH SIZE SETTING SLIDER
function updateSizeText() {
  const sliderText = document.getElementById('size-settings-text');
  const newText = `${sizeSetting.value} x ${sizeSetting.value}`;
  sliderText.textContent = newText;
}

// FUNCTION TO FILL THE CANVAS WITH CORRECT NUMBER OF SQUARES
function createCanvas(squares) {
  const canvas = document.getElementById('canvas');
  canvas.innerHTML = '';
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
  event.target.style.background = colorPicker.value;
}

// FUNCTION TO DETERMINE A RANDOM RGB() COLOR VALUE
function randomHexColor() {
  const hex = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + hex.slice(0, 6);
}