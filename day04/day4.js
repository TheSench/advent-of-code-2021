const { splitByWhitespace } = require('../utils/stringSplitters');

function parseBoards(lines) {
    const boards = {};
    let currentBoard = {
        rows: [],
        numbers: {}
    };
    let row = 0;
    lines.forEach(line => {
        if (line === '') {
            currentBoard = {
                rows: [],
                numbers: {}
            };
            row = 0;
        } else {
            const nextRow = splitByWhitespace(line).filter(row => row);
            currentBoard.rows.push(nextRow);
            nextRow.forEach((num, col) => {
                addBoard(boards, currentBoard, num);
                currentBoard.numbers[num] = [row, col];
            });
            row++;
        }
    });

    return boards;
}

function won(board) {
    const columns = [0,0,0,0,0];
    for(let r = 0; r < board.rows.length; r++) {
        const row = board.rows[r];
        let countForRow = 0;
        for(let c = 0; c < 5; c++) {
            if (row[c] === 'x') {
                countForRow++;
                columns[c]++;
            }
        }
        if (countForRow === 5) {
            return true;
        }
    }
    if (columns.indexOf(5) >= 0) {
        return true
    };

    let topLeftBottomRight = 0;
    let bottomLeftTopRight = 0;
    for (let i = 0; i < 5; i++) {
        if (board.rows[i][i] === 'x') topLeftBottomRight++;
        if (board.rows[i][4 - i]  === 'x') bottomLeftTopRight++;
    }
    if (topLeftBottomRight === 5 || bottomLeftTopRight === 5) {
        return true;
    }

    return false;
}

function findFirstWinner(boards, numbers) {
    for(let number of numbers) {
        let boardsWithNum = boards[number];
        for(let board of boardsWithNum) {
            const [row, col] = board.numbers[number];
            board.rows[row][col] = 'x';
            if (won(board)) {
                return [board, number];
            }
        }
    }
}

function addBoard(boards, board, num) {
    const boardsForNum = boards[num] || [];
    boardsForNum.push(board);
    boards[num] = boardsForNum;
}

function calculateScore(board) {
    let score = 0;
    for(var row of board.rows) {
        for(var cell of row) {
            if (cell !== 'x') {
                score += parseInt(cell);
            }
        }
    }
    return score;
}

module.exports = {
    parseBoards,
    won,
    findFirstWinner,
    calculateScore
};