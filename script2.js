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

  function newGame() {
    game = gameController();
    people = playerController();
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

  function playerMovement() {}

  function checkWinner() {}

  return { board, newGame, findCell, playerMovement, checkWinner };
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
      console.log(wins);
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

  return { players, playerCreator, getCurrentPlayer, switchPlayer };
}

let game = gameController();
let people = playerController();
