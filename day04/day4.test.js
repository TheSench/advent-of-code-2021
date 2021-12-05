const { parseBoards, won } = require("./day4");

describe('day4 functions', () => {
    describe('parseBoards', () => {
    });

    describe('won', () => {
        it('detects a win in a row', () => {
            const board = {
                rows: [
                    ['x', '0', '0', '0', '0'],
                    ['x', '0', '0', '0', '0'],
                    ['x', 'x', 'x', 'x', 'x'],
                    ['x', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0'],
                ]
            };

            expect(won(board)).toEqual(true);
        });
        
        it('detects a win in a column', () => {
            const board = {
                rows: [
                    ['x', '0', '0', '0', '0'],
                    ['x', '0', '0', '0', '0'],
                    ['x', 'x', '0', 'x', 'x'],
                    ['x', '0', '0', '0', '0'],
                    ['x', '0', '0', '0', '0'],
                ]
            };

            expect(won(board)).toEqual(true);
        });
        
        it('detects a win in a diagonal', () => {
            const board = {
                rows: [
                    ['x', '0', '0', '0', '0'],
                    ['x', 'x', '0', '0', '0'],
                    ['x', 'x', 'x', 'x', 'x'],
                    ['0', '0', '0', 'x', '0'],
                    ['x', '0', '0', '0', 'x'],
                ]
            };

            expect(won(board)).toEqual(true);
        });
        
        it('detects a win in the other diagonal', () => {
            const board = {
                rows: [
                    ['x', '0', '0', '0', 'x'],
                    ['x', 'x', '0', 'x', '0'],
                    ['x', 'x', 'x', 'x', 'x'],
                    ['0', 'x', '0', 'x', '0'],
                    ['x', '0', '0', '0', '0'],
                ]
            };

            expect(won(board)).toEqual(true);
        });
        
        it('detects nothing when the board is not won', () => {
            const board = {
                rows: [
                    ['x', '0', '0', '0', '0'],
                    ['x', 'x', '0', '0', '0'],
                    ['x', 'x', '0', 'x', 'x'],
                    ['0', '0', '0', 'x', '0'],
                    ['x', '0', '0', '0', 'x'],
                ]
            };

            expect(won(board)).toEqual(false);
        });
    });
});