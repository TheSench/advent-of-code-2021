const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { parseCommandWithAim } = require('./day2');

readInput(__dirname).then(rawText => {
    const position = splitIntoLines(rawText)
        .map(parseCommandWithAim)
        .reduce((position, command) => command(position), {vertical: 0, horizontal: 0, aim: 0});

    const product = position.horizontal * position.vertical;

    console.log(product);
});