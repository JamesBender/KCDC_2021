function TicTacToe() {
    let board  = [[], [], []];

    return {
        getWinner: () => {
            return;
        },
        getCell: (x,y) => {
            return board[x][y];
        },
        addToken:(x,y,token) => {
            board[x][y] = token;
        }
    }
}

module.exports = TicTacToe;
