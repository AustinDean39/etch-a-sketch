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
  
  console.log(canvas.childNodes);

  return;
}