// 01 Original Grid with 16 x 16 squares

const container = document.querySelector(".container");

let row = "";
let column = "";

function originalSize(input) {
  let columns = input;
  let rows = input;
  for (let i = 1; i <= columns; i++) {
    column = document.createElement("div");
    column.className = "column";
    for (let j = 1; j <= rows; j++) {
      row = document.createElement("div");
      row.className = "row";
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}

// originalSize(changeSize());
originalSize(16);

// 02 Hover turns squares red

let square = document.getElementsByClassName(row);

let squares = document.getElementsByClassName("row");
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseover", () => {
    squares[i].setAttribute("style", "background-color: red");
  });
}

// Random color guide - https://codepen.io/teresethulin/pen/MWWrdVZ
// Or this

// 03 Button to Change Size of Grid

let sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", changeSize);

function changeSize() {
  let size = prompt("Please enter a number between 1 and 100", "");
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  originalSize(size);
}
