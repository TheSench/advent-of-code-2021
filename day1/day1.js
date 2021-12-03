function identifyChange(previous, next) {
    if (previous < next) {
        return 'increase';
    } else if (previous > next) {
        return 'decrease';
    } else {
        return 'same';
    }
}

function identifyChanges(input) {
    const changes = [];
    for (var i = 1; i < input.length; i++) {
        changes.push(identifyChange(input[i-1], input[i]));
    }
    return changes;
}

module.exports = {
    identifyChange,
    identifyChanges
};