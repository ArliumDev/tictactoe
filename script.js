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

  return { board, players, getCurrentPlayer, switchPlayer };
}

const game = gameController();
console.log(game);

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
