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
















// const player1 = playerCreator('PerroComepingas', 'X');
// const player2 = playerCreator('SrEsqueletinho', 'O');

// console.log(`Player: ${player1.name} Token: ${player1.token} Wins: ${player1.getWins()}`);
// console.log(`Player: ${player2.name} Token: ${player2.token} Wins: ${player2.getWins()}`);

// const testing = gameBoard();
// const testBoard = testing.newBoard();
// testBoard[0][0] = "X";
// console.log(testBoard);