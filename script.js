function removeTransition(e) {
  if (e.type !== "mouseleave") return;
  setTimeout(() => {
    this.classList.remove("hovered");
  }, 300);
}

const button = document.getElementById("btn-change-dim");

button.addEventListener("click", changeGrid);

// Creates default 16x16 grid on page load.
function loadGrid() {
  const container = document.getElementById("container");

  for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    gridItem.addEventListener("mouseover", function (e) {
      this.classList.add("hovered");
    });

    gridItem.addEventListener("mouseleave", removeTransition);

    container.appendChild(gridItem);
  }

  // Print grid size
  const gridDimensions = document.getElementById("grid-size");
  gridDimensions.innerHTML = "16 x 16";
}

function changeGrid() {
  let gridSize = prompt(
    "Enter the number of squares per side for the new grid (1-64):"
  );
  gridSize = parseInt(gridSize);

  if (!gridSize || gridSize <= 0 || gridSize > 64) {
    alert("Invalid input! Please enter a number between 1 and 64.");
    return;
  }

  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear the existing grid
  const squareSize = `calc(100% / ${gridSize})`;

  // Create the new grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.style.width = squareSize;
    gridItem.style.height = squareSize;
    gridItem.className = "grid-item";

    gridItem.addEventListener("mouseover", function (e) {
      this.classList.add("hovered");
    });

    gridItem.addEventListener("mouseleave", removeTransition);

    container.appendChild(gridItem);
  }
  // Print grid size
  const gridDimensions = document.getElementById("grid-size");
  gridDimensions.innerHTML = `${gridSize} x ${gridSize}`;
}

// Create the default grid when the page is loaded
window.onload = loadGrid;
