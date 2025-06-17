function playerMovement(player, cell) {
  // Current player
  const chosenCell = findCell(cell);
  if (!chosenCell == "") {
    // put "Unavailable cell";
    return;
  } else {
    board[chosenCell[0]][chosenCell[1]] = playerToken;  
    currentPlayer = togglePlayer();
  }
}

const board = [
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
];

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
  console.log(coords);
  return coords;  
}


findCell(1);
findCell(2);
findCell(3);
findCell(4);
findCell(5);
findCell(6);
findCell(7);
findCell(8);
findCell(9);
