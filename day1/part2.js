const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { identifyChanges, sumsOfSlidingWindows } = require('./day1');

readInput(__dirname).then(rawText => {
    const numbers = splitIntoLines(rawText)
        .map(Number);

    const windows = sumsOfSlidingWindows(numbers);
    const numIncreases = identifyChanges(windows)
        .filter(it => it === 'increase')
        .length;

    console.log(numIncreases);
});