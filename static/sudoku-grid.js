const sudokuGrid = document.querySelector(".sudoku-grid");
for(i = 0; i < 81; i++) {
  sudokuGrid.innerHTML += `<div class="sudoku-cell"></div>`;
}
const sudokuCell = document.querySelectorAll(".sudoku-cell");

function resetSudokuGrid() {
  sudokuCell.forEach(cell => {
    cell.classList.remove("is-selected-cell");
    cell.style.backgroundColor = "white";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  window.onbeforeunload = function() {
    return "Bạn có chắc chắn muốn tải lại trang không?";
  };
  fetch('https://sudoku-api.vercel.app/api/dosuku')
    .then(response => response.json())
    .then(responseData => {
      let data = responseData;
      
      sudokuCell.forEach((cell, index) => {
        
        i = Math.floor(index / 9);
        j = index % 9;
        cell.textContent = data.newboard.grids[0].value[i][j];
        if (i % 3 == 2) {
          cell.style.borderBottom = "2px solid black";
        }
        cell.addEventListener("click", () => {
          resetSudokuGrid();
          cell.style.backgroundColor = "red";
        });
      });
    })
    .catch(error => console.error('Lỗi khi lấy API:', error));
});