// Board creation

function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push("");
    }
  }
  return board;
}

// Retrieve user input

function getUserInput() {
  return parseInt(prompt('Enter a number between 1 and 9 and make your move: '));
}

// Convert input to 2d array coordinates

function convertToCoordinates(input) {
  const row = Math.floor((input - 1) / 3);
  const col = (input - 1) % 3;
  console.log([row, col]);
  return [row, col];
}

// Appplies player movement

function playerMovement(board, coordinates, player) {
  const [row, col] = coordinates;
  if(board[row][col] === "") {
    board[row][col] = player;
    console.log(board);
  }
}

const board = gameBoard();

playerMovement(board, convertToCoordinates(getUserInput()), 'X');