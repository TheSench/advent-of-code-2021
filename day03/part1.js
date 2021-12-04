const { readInput } = require('../utils/fileUtils');
const { splitIntoLines } = require('../utils/stringSplitters')
const { convertToBits, mostCommonBits, bitsToDecimal } = require('./day3');

readInput(__dirname).then(rawText => {
    const bits = splitIntoLines(rawText)
        .map(convertToBits);
    const mostCommon = mostCommonBits(bits);
    const leastCommon = mostCommon.map(bit => 1-bit);
    const gammaRate = bitsToDecimal(mostCommon);
    const epsilonRate = bitsToDecimal(leastCommon);

    const product = gammaRate * epsilonRate;

    console.log(product);
});