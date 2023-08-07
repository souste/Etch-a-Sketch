// 01 Original Grid with 16 x 16 squares

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

// 02 Hover turns squares red

let mouseDown = false;

let square = document.getElementsByClassName(row);

let squares = document.getElementsByClassName("row");
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mousedown", () => {
    mouseDown = true;
  });

  squares[i].addEventListener("mouseup", () => {
    mouseDown = false;
  });

  squares[i].addEventListener("mouseover", () => {
    if (mouseDown) {
      squares[i].setAttribute("style", "background-color: black");
    }
  });
}

// 03 Button to Change Size of Grid

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
        `width: ${720 / size}px; height: ${720 / size}px`
      );
    }
  } else {
    alert("Please select a size less than 100");
    originalSize(16);
  }
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
    });

    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: black; width: ${720 / size}px; height: ${
            720 / size
          }px;`
        );
      }
    });
  }
}

// 04 Button for random colour hover

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
    });

    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: ${randomColour()}; width: ${
            720 / size
          }px; height: ${720 / size}px; `
        );
      }
    });
  }
});

// Button to revert back to black

let blackButton = document.querySelector(".black-button");

blackButton.addEventListener("click", () => {
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
    });

    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: black; width: ${720 / size}px; height: ${
            720 / size
          }px; `
        );
      }
    });
  }
});

// Colour Picker Button

let colourParent = document.querySelector(".colour-picker");
let colourPicker = new Picker(colourParent);

let colourLog;
colourParent.addEventListener("click", () => {
  newColour = colourPicker.onChange = function (color) {
    colourLog = colourParent.style.background = color.rgbaString;
  };
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
    });

    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: ${colourLog}; width: ${720 / size}px; height: ${
            720 / size
          }px; `
        );
      }
    });
  }
});

// colourPicker.addEventListener("click", (colour) => {
//   colourParent.style.background = color.rgbaString;
// });

// Erase Button

let eraseButton = document.querySelector(".erase-button");

eraseButton.addEventListener("click", () => {
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mousedown", () => {
      mouseDown = true;
    });

    squares[i].addEventListener("mouseup", () => {
      mouseDown = false;
    });
    squares[i].addEventListener("mouseover", () => {
      if (mouseDown) {
        squares[i].setAttribute(
          "style",
          `background-color: white; width: ${720 / size}px; height: ${
            720 / size
          }px; `
        );
      }
    });
  }
});

// Clear Button

let clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", () => {
  let squares = document.getElementsByClassName("row");
  for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute(
      "style",
      `background-color: white; width: ${720 / size}px; height: ${
        720 / size
      }px;`
    );
  }
});

// TO DO

// Add Specific Colour Button
// Dial for Grid Size instead of button
