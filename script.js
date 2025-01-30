// Board creation

function gameBoard() {
  const rows = 3;
  const columns = 3;
  const newBoard = [];

  for (let i = 0; i < rows; i++) {
    newBoard[i] = [];
    for (let j = 0; j < columns; j++) {
      newBoard[i].push('');
    }
  }
  console.log(newBoard);
  return [newBoard, columns];
}

// Destructuring return values into variables

let [board, numCols] = gameBoard();

// Handle player switch

let currentPlayer = 'X';

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  console.log(currentPlayer);
}

// Checks if there is any cell available

function checkBoard(arr) {
  const full = (el) => el !== '';
  return arr.every((row) => row.every(full));
}

checkBoard(board);

// Get user input cell

function getUserInput() {
  return prompt('Select a cell from 1 to 9');
}

// Transforms user input into 2D array coordinates

function getCellCoordinates(input, cols) {
  const index = input - 1;
  const row = Math.floor(index / cols);
  const col = index % numCols;
  return [row, col];
}

// Displays player movement

function playerMovement(cols, input) {
  let [row, col] = getCellCoordinates(input, cols);
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
  }
  console.log(board);
  switchPlayer();
  return currentPlayer;
}

// Checks winner

function checkHorizontal(board) {
  for (let i = 0; i < 3; i++) {
    let ref = board[i][0];
    if (board[i][1] == ref && board[i][2] == ref) {
      console.log(board[i]);
      console.log("Winner");
      return;
    }
  }
}

function checkVertical(board) {
  for (let i = 0; i < 3; i++) {
    let ref = board[0][i];
    if (board[1][i] == ref && board[2][i] == ref) {
      console.log(board[0][i],board[1][i],board[2][i]);
      console.log("Winner");
      return;
    }
  }
}

function checkDiagonal(board) {
  let ref1 = board[0][0];
  let ref2 = board[0][2];
  if (board[1][1] == ref1 && board[2][2] == ref1) {
    console.log("Winner ref1");
    return;
  }
  if (board[1][1] == ref2 && board[2][0] == ref2) {
    console.log("Winner ref2");
    return;
  }
}