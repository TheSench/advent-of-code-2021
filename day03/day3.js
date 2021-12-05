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

function groupByBit(bitArrays, bit) {
    return bitArrays.reduce((groups, next) => {
        const group = next[bit];
        groups[group].push(next);
        return groups;
    }, [[],[]]);
}

function reduceBitArrays(bitArrays, choice) {
    let bitArraySize = bitArrays[0].length;
    let chosen = bitArrays;
    for (let i = 0; i < bitArraySize && chosen.length > 1; i++) {
        let groups = groupByBit(chosen, i)
            .sort((a, b) => a.length - b.length);
        chosen = groups[choice];
    }
    return chosen[0];
}

module.exports = {
    convertToBits,
    mostCommonBits,
    bitsToDecimal,
    groupByBit,
    reduceBitArrays
};