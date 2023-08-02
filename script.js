const container = document.querySelector(".container");
// const grid = document.createElement("div");
// grid.setAttribute("style", "border: 2px solid black; background-color: grey");
// grid.textContent = "Hello There";
// container.append(grid);

// let columns = 4;
// let rows = 4;

// grid.className = "grid";

let columns = 16;
let rows = 16;

let grid = document.createElement("div");
container.className = "grid";

for (let i = 0; i <= columns; i++) {
  let column = document.createElement("div");
  column.className = "column";
  for (let j = 0; j <= rows; j++) {
    let row = document.createElement("div");
    row.className = "row";
    column.appendChild(row);
  }
  container.appendChild(column);
}
