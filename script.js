// 01 Original Grid with 16 x 16 squares

let container = document.querySelector(".container");

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
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  if (size <= 100) {
    originalSize(size);
    let squares = document.getElementsByClassName("row");

    for (let i = 0; i < squares.length; i++) {
      squares[i].setAttribute(
        "style",
        `width: ${480 / size}px; height: ${480 / size}px`
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
          `background-color: black; width: ${480 / size}px; height: ${
            480 / size
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
            480 / size
          }px; height: ${480 / size}px; `
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
          `background-color: black; width: ${480 / size}px; height: ${
            480 / size
          }px; `
        );
      }
    });
  }
});

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
          `background-color: white; width: ${480 / size}px; height: ${
            480 / size
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
      `background-color: white; width: ${480 / size}px; height: ${
        480 / size
      }px;`
    );
  }
});

// Specific Colour Button
