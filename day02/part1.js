const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { parseCommand, addDistances } = require('./day2');

readInput(__dirname).then(rawText => {
    const position = splitIntoLines(rawText)
        .map(parseCommand)
        .reduce(addDistances, {vertical: 0, horizontal: 0});

    const product = position.horizontal * position.vertical;

    console.log(product);
});