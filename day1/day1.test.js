const { identifyChange, identifyChanges } = require('./day1');

describe('identifyChange', () => {
    it.each([
        [0, 1],
        [10, 15],
        [-5, 7],
        [-5, -4]
    ])(`properly returns "increase" from %i to %i`, (previous, next) => {
        const result = identifyChange(previous, next);

        expect(result).toBe('increase');
    });

    it.each([
        [1, 0],
        [15, 10],
        [7, -5],
        [-4, -5]
    ])(`properly returns "decrease" from %i to %i`, (previous, next) => {
        const result = identifyChange(previous, next);

        expect(result).toBe('decrease');
    });

    it.each([
        1,
        2,
        15,
        -12
    ])(`properly returns "same" when both values are %i`, (value) => {
        const result = identifyChange(value);

        expect(result).toBe('same');
    });
});

describe('identifyChanges', () => {
    it('returns correct range from example', () => {
        const exampleInput = [
            199,
            200,
            208,
            210,
            200,
            207,
            240,
            269,
            260,
            263
        ];

        const result = identifyChanges(exampleInput);

        expect(result).toEqual([
            'increase',
            'increase',
            'increase',
            'decrease',
            'increase',
            'increase',
            'increase',
            'decrease',
            'increase'
        ]);
    });
});