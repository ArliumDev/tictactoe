function checkWinner (cell) {
get coords = findCell(cell)
get lastRow = coords[0]
get lastColumn = coords[1]
get tokenToCheck = board[lastRow][lastColumn]
isSameToken = (token) => token === tokenToCheck

// Horizontal

checkHorizontal = board[lastRow].every(isSameToken)

// Vertical
columnValues = [];
for (let i = 0; i < 3; i++) {
columnValues.push(board[i][lastColumn])
};
checkVertical = columnValues.every(isSameToken)

// Diagonal

N = board.length

// // Main diagonal (0-4-8)

mainDiagHolder = [];

for (let i = 0; i < N; i++) {
mainDiaglHolder.add(board[i][i]);
}

// // Secondary diagonal (2-4-6)

secoDiagHolder = [];

for (let i = 0; i < N; i++) {
secoDiagHolder.add(board[i][(N-1) - i])
}

checkMainDiag = mainDiagHolder.every(isSameToken);
checkSecoDiag = secoDiagHolder.every(isSameToken);

if (checkHorizontal || checkVertical || checkMainDiag || checkSecoDiag) {
  You Win!
} else {
  Resume game
}

}
