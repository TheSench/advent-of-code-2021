const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { identifyChanges } = require('./day1');

readInput(__dirname).then(rawText => {
    const numbers = splitIntoLines(rawText)
        .map(Number);

    const numIncreases = identifyChanges(numbers)
        .filter(it => it === 'increase')
        .length;

    console.log(numIncreases);
});