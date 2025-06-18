function gameController() {
  const board = gameBoard();
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
    return board;
  }
  return { board };
}

function playerController() {
  const players = [playerCreator('PerroComepingas', 'X'), playerCreator('SrEsqueletinho', 'O')];
  let currentPlayerIndex = 0;
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

  function getCurrentPlayer() {
    console.log(players[currentPlayerIndex]);
    return players[currentPlayerIndex];
  }

  function switchPlayer() {
    currentPlayerIndex = 1 - currentPlayerIndex;
    console.log(currentPlayerIndex);
  }

  function playerMovement() {}

  return { players, playerCreator, getCurrentPlayer, switchPlayer, playerMovement };
}

