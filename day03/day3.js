function convertToBits(bitString) {
    return [...bitString].map(n => parseInt(n, 10));
}

function mostCommonBits(bitArrays) {
    const half = bitArrays.length / 2;
    return bitArrays.reduce((sums, next) => sums.map((sum, i) => sum + next[i]))
        .map(bitSum =>
            (bitSum > half) ? 1 : 0
        );
}

function bitsToDecimal(bits) {
    let decimal = 0;
    for (i = 0; i < bits.length; i++) {
        decimal <<= 1;
        decimal += bits[i];
    }
    return decimal;
}

module.exports = {
    convertToBits,
    mostCommonBits,
    bitsToDecimal
};