const TicTacToe = require('./tic-tac-toe');

describe('when I am playing Tic Tac Toe', () => {

    const ticTacToe = new TicTacToe();

    it('I should get a valid game engine', () => {
        expect(ticTacToe).toBeTruthy();
    });

    describe('and the board is empty', () => {
        it('there is no winner', () => {
            expect(ticTacToe.getWinner()).toBeUndefined();
        });
    });

    describe('and I add an X to the top left cell', () => {

        beforeEach(() => {
            ticTacToe.addToken(0,0,'X');
        });

        it('the top left cell should have an X', () => {
            expect(ticTacToe.getCell(0,0)).toBe('X');
        });

        describe('and I add an X to the top middle cell', () => {

            beforeEach(() => {
                ticTacToe.addToken(0,1,'X');
            });

            it('the top left middle cell should have an X', () => {
                expect(ticTacToe.getCell(0,1)).toBe('X')
            });

            describe('and I add an X to the top right cell', () => {
                beforeEach(() => {
                    ticTacToe.addToken(0,2,'X');
                });

                it('the top right should have an X', () => {
                    expect(ticTacToe.getCell(0,2)).toBe('X');
                });
            });
        });
    });

    describe('and I add an Y to the top left cell', () => {
        beforeEach(() => {
            ticTacToe.addToken(0,0,'Y');
        });

        it('the top left cell should have an Y', () => {
            expect(ticTacToe.getCell(0,0)).toBe('Y');
        })
    })
})