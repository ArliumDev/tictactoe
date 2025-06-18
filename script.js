function gameController() {
  const board = gameBoard().newBoard();
  const players = [playerCreator('PerroComepingas', 'X'), playerCreator('SrEsqueletinho', 'O')];
  let currentPlayerIndex = 0;

  function getCurrentPlayer() {
    return players[currentPlayerIndex];
  }

  function switchPlayer() {
    currentPlayerIndex = 1 - currentPlayerIndex;
  }

  function findCell(cell) {
    const cellsMap = {
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [1, 0],
      5: [1, 1],
      6: [1, 2],
      7: [2, 0],
      8: [2, 1],
      9: [2, 2],
    };
    const coords = cellsMap[cell];
    return coords;
  }

  return { board, players, getCurrentPlayer, switchPlayer, findCell };
}

function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = ' ';
    }
  }
  function newBoard() {
    return board.map((row) => row.slice());
  }
  return { newBoard };
}

function playerCreator(name, token) {
  let wins = 0;

  function sumWins() {
    wins++;
  }

  function getWins() {
    return wins;
  }

  return { name, token, sumWins, getWins };
}

function playerMovement(game, cell) {
  const currentPlayer = game.getCurrentPlayer();
  const selectedCell = game.findCell(cell);
  let lastColumn = 0;
  let lastRow = 0;
  if (game.board[selectedCell[0]][selectedCell[1]] !== ' ') {
    console.log('Occupied cell');
    return;
  } else {
    game.board[selectedCell[0]][selectedCell[1]] = currentPlayer.token;
    lastColumn = selectedCell[0];
    lastRow = selectedCell[1];
    game.switchPlayer();
  }
  return { row: lastRow, column: lastColumn };
}

const game = gameController();

playerMovement(game, 1);

console.log(game.board);
