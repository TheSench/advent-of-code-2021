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

const AIMED_COMMANDS = {
    forward: (amount) => (position) => ({
        ...position,
        horizontal: position.horizontal + amount,
        vertical: position.vertical + (position.aim * amount)
    }),
    up: (amount) =>  (position) => ({
        ...position,
        aim: position.aim - amount
    }),
    down: (amount) =>  (position) => ({
        ...position,
        aim: position.aim + amount
    })
};
function parseCommandWithAim(rawCommand) {
    let { direction, amount } = COMMAND_REGEX.exec(rawCommand).groups;
    amount = parseInt(amount);
    return AIMED_COMMANDS[direction](amount);
}

module.exports = {
    parseCommand,
    addDistances,
    parseCommandWithAim
};