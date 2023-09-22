// 01 ORIGINAL GRID WITH 16 X 16 SQUARES

let grid = document.querySelector(".grid");

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
    grid.appendChild(column);
  }
}

originalSize(16);

// 02 FUNCTION TO CHANGE COLOUR (REFACTORED)

let square = document.getElementsByClassName(row);
let squares = document.getElementsByClassName("row");

let mouseDown = false;

function currentColour(colour) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
      squares[i].setAttribute(
        "style",
        `background-color: ${colour}; width: ${600 / size}px; height: ${
          600 / size
        }px; `
      );
    });
    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: ${colour}; width: ${600 / size}px; height: ${
            600 / size
          }px; `
        );
      }
    });
  }
}

currentColour("black");

// 03 BUTTON TO CHANGE SIZE OF GRID

let sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", changeSize);

let size = "";

function changeSize() {
  size = prompt("Please enter a number between 1 and 100", "");
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
  if (size <= 100) {
    originalSize(size);
    let squares = document.getElementsByClassName("row");

    for (let i = 0; i < squares.length; i++) {
      squares[i].setAttribute(
        "style",
        `width: ${600 / size}px; height: ${600 / size}px`
      );
    }
  } else {
    alert("Please select a size less than 100");
    originalSize(16);
  }
  currentColour("black");
}

// RANDOM COLOUR BUTTON

function randomColour() {
  let letters = "0123456789ABCDEF".split("");
  let colour = "#";
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * letters.length)];
  }
  return colour;
}

let colourButton = document.querySelector(".colour-button");

colourButton.addEventListener("click", () => {
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
      squares[i].setAttribute(
        "style",
        `background-color: ${randomColour()}; width: ${600 / size}px; height: ${
          600 / size
        }px; `
      );
    });
    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: ${randomColour()}; width: ${
            600 / size
          }px; height: ${600 / size}px; `
        );
      }
    });
  }
});

// BLACK BUTTON

let blackButton = document.querySelector(".black-button");

blackButton.addEventListener("click", () => {
  let colour = "black";
  currentColour(colour);
});

// COLOUR PICKER BUTTON

let colourParent = document.querySelector(".colour-picker");
let colourPicker = new Picker(colourParent);

let colourLog;

colourParent.addEventListener("click", () => {
  newColour = colourPicker.onChange = function (color) {
    colourLog = colourParent.style.background = color.rgbaString;
  };
  currentColour(colourLog);
});

// ERASER BUTTON

let eraseButton = document.querySelector(".erase-button");

eraseButton.addEventListener("click", () => {
  let colour = "white";
  currentColour(colour);
});

// CLEAR BUTTON

let clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute(
      "style",
      `background-color: rgb(216, 228, 213); width: ${600 / size}px; height: ${
        600 / size
      }px;`
    );
  }
});
