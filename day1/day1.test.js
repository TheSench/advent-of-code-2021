const { identifyChange, identifyChanges, sumsOfSlidingWindows } = require('./day1');

const EXAMPLE_INPUT = [
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

describe('day1 functions', () => {
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
        ])(`properly returns "no change" when both values are %i`, (value) => {
            const result = identifyChange(value);

            expect(result).toBe('no change');
        });
    });

    describe('identifyChanges', () => {
        it('returns correct range from example', () => {
            const result = identifyChanges(EXAMPLE_INPUT);

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

    describe('sumsOfSlidingWindows', () => {
        it('produces correct sums based on example input', () => {
            const result = sumsOfSlidingWindows(EXAMPLE_INPUT);

            expect(result).toEqual([
                607,
                618,
                618,
                617,
                647,
                716,
                769,
                792
            ]);
        });
    });
});