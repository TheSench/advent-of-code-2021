const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { parseBoards, findLastWinner, calculateScore } = require('./day4');

readInput(__dirname).then(rawText => {
    const lines = splitIntoLines(rawText);
    const numbers = lines[0].split(',');
    const boards = parseBoards(lines.slice(2));

    const [winningBoard, winningNumber] = findLastWinner(boards, numbers);
    const score = calculateScore(winningBoard);
    const product = parseInt(winningNumber) * score;

    console.log(product);
}).catch(console.error);