const COMMAND_REGEX = /(?<direction>\w+)\s+(?<amount>\d+)/;

const COMMANDS = {
    forward: (amount) => ({ horizontal: amount, vertical: 0 }),
    up: (amount) => ({ horizontal: 0, vertical: -amount }),
    down: (amount) => ({ horizontal: 0, vertical: amount })
};

function parseCommand(rawCommand) {
    let { direction, amount } = COMMAND_REGEX.exec(rawCommand).groups;
    amount = parseInt(amount);
    return COMMANDS[direction](amount);
}

function addDistances(first, second) {
    return {
        horizontal: first.horizontal + second.horizontal,
        vertical: first.vertical + second.vertical
    }
}

module.exports = {
    parseCommand,
    addDistances
};