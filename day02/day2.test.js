const { parseCommand, addDistances, parseCommandWithAim } = require('./day2');

describe('day2 functions', () => {
    describe('parseCommand', () => {
        it('should parse "foward" commands as positive horizontal movement', () => {
            const rawCommand = 'forward 5';

            const result = parseCommand(rawCommand);

            expect(result).toEqual({
                horizontal: 5,
                vertical: 0
            });
        });

        it('should parse "down" commands as positive vertical movement', () => {
            const rawCommand = 'down 7';

            const result = parseCommand(rawCommand);

            expect(result).toEqual({
                horizontal: 0,
                vertical: 7
            });
        });

        it('should parse "up" commands as negative vertical movement', () => {
            const rawCommand = 'up 2';

            const result = parseCommand(rawCommand);

            expect(result).toEqual({
                horizontal: 0,
                vertical: -2
            });
        });
    });

    describe('addDistances', () => {
        it('should sum up the horizontal and vertical distances of two commands', () => {
            const first = { horizontal: 2, vertical: 4 };
            const second = { horizontal: 4, vertical: -3 };

            const result = addDistances(first, second);

            expect(result).toEqual({
                horizontal: 6,
                vertical: 1
            });
        })
    });

    describe('parseCommandWithAim', () => {
        it('should parse "forward" as increasing horizontal distance by x and vertical distance by x*aim', () => {
            const position = { horizontal: 2, vertical: 3, aim: 5 };
            const rawCommand = "forward 5";

            const command = parseCommandWithAim(rawCommand);
            const result = command(position);

            expect(result).toEqual({
                horizontal: 7,
                vertical: 28,
                aim: 5
            });
        });

        it('should parse "up" as decreasing aim distance by x', () => {
            const position = { horizontal: 2, vertical: 3, aim: 5 };
            const rawCommand = "up 4";

            const command = parseCommandWithAim(rawCommand);
            const result = command(position);

            expect(result).toEqual({
                horizontal: 2,
                vertical: 3,
                aim: 1
            });
        });

        it('should parse "down" as increasing aim distance by x', () => {
            const position = { horizontal: 2, vertical: 3, aim: 5 };
            const rawCommand = "down 2";

            const command = parseCommandWithAim(rawCommand);
            const result = command(position);

            expect(result).toEqual({
                horizontal: 2,
                vertical: 3,
                aim: 7
            });
        });
    });
});