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

/* DEJA DE USAR CHATGPT PARA QUE TE HAGA EL CÓDIGO PORQUE CON LO DE CHEQUEAR WIN NO HA SALIDO BIEN
RÓMPETE LOS CUERNOS TÚ SOLO Y PÍDELE PEQUEÑAS AYUDAS O VAS A PERDER EL TIEMPO */ 