const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { convertToBits, groupByBit, reduceBitArrays, bitsToDecimal } = require('./day3');

readInput(__dirname).then(rawText => {
    const bits = splitIntoLines(rawText)
        .map(convertToBits);

    const oxygen = reduceBitArrays(bits, 1);
    const co2 = reduceBitArrays(bits, 0);

    const product = bitsToDecimal(oxygen) * bitsToDecimal(co2);

    console.log(product);
});