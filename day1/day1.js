function identifyChange(previous, next) {
    if (previous < next) {
        return 'increase';
    } else if (previous > next) {
        return 'decrease';
    } else {
        return 'no change';
    }
}

function identifyChanges(input) {
    const changes = [];
    for (var i = 1; i < input.length; i++) {
        changes.push(identifyChange(input[i-1], input[i]));
    }
    return changes;
}

function sumsOfSlidingWindows(input) {
    const windowSums = [];
    for (let i = 0; i < input.length - 2; i++) {
        const nextWindow = input.slice(i, i + 3).reduce(sum);
        windowSums.push(nextWindow);
    }
    return windowSums;
}

function sum(a, b) {
    return a + b;
}

module.exports = {
    identifyChange,
    identifyChanges,
    sumsOfSlidingWindows
};