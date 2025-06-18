function gameController() {
  const board = gameBoard();
  const players = playerController();

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

  function newGame() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] = ' ';
      }
    }
    players.reset();
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

  function playerMovement(cell) {
    const selectedCell = findCell(cell);
    const row = selectedCell[0];
    const column = selectedCell[1];
    //checkWinner(see)
    // if else checkWinner
    const currentPlayer = players.getCurrentPlayer();
    if (board[row][column] !== ' ') {
      console.log('Cell unavailable');
      return;
    } else {
      board[row][column] = currentPlayer.token;
      players.switchPlayer();
    }
  }

  function checkWinner(cell) {
    const selectedCell = findCell(cell);
    const row = selectedCell[0];
    const column = selectedCell[1];
    const checkToken = board[row][column];
    const isSameToken = (token) => token === checkToken;
    const N = board.length;

    // Horizontal
    const checkHorizontal = board[row].every(isSameToken);

    // Vertical
    const columnValues = [];
    for (let i = 0; i < N; i++) {
      columnValues.push(board[i][column]);
    }
    const checkVertical = columnValues.every(isSameToken);

    // Main diagonal
    let checkMainDiag = false;
    if (row === column) {
      const mainDiagHolder = [];
      for (let i = 0; i < N; i++) {
        mainDiagHolder.push(board[i][i]);
      }
      checkMainDiag = mainDiagHolder.every(isSameToken);
    }

    // Secondary diagonal
    let checkSecoDiag = false;
    if (row + column === N - 1) {
      const secoDiagHolder = [];
      for (let i = 0; i < N; i++) {
        secoDiagHolder.push(board[i][N - 1 - i]);
      }
      checkSecoDiag = secoDiagHolder.every(isSameToken);
    }

    if (checkHorizontal || checkVertical || checkMainDiag || checkSecoDiag) {
      console.log('You Win!');
      return true;
    } else {
      return false;
    }
  }
  return { board, newGame, findCell, playerMovement, checkWinner };
}

function playerController() {
  const playersHolder = [playerCreator('PerroComepingas', 'X'), playerCreator('SrEsqueletinho', 'O')];
  let currentPlayerIndex = 0;

  function playerCreator(name, token) {
    let wins = 0;

    function sumWins() {
      wins++;
    }

    function getWins() {
      console.log(wins);
      return wins;
    }

    function resetWins() {
      wins = 0;
    }
    return { name, token, sumWins, getWins, resetWins };
  }

  function getCurrentPlayer() {
    return playersHolder[currentPlayerIndex];
  }

  function switchPlayer() {
    currentPlayerIndex = 1 - currentPlayerIndex;
  }

  function reset() {
    currentPlayerIndex = 0;
    playersHolder.forEach((player) => player.resetWins());
  }

  return { playersHolder, playerCreator, getCurrentPlayer, switchPlayer, reset };
}

const game = gameController();
