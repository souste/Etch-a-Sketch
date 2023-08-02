const container = document.querySelector(".container");

let columns = 16;
let rows = 16;
let row = "";
let column = "";

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

let square = document.getElementsByClassName(row);

// hover effect on squares to change colour

let squares = document.getElementsByClassName("row");
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseover", () => {
    squares[i].setAttribute("style", "background-color: red");
  });
}
