const { mostCommonBits, convertToBits, bitsToDecimal, groupByBit, reduceBitArrays } = require('./day3');

describe('day3 functions', () => {
    describe('convertToBits', () => {
        it("converts a string of 1's and 0's to bits", () => {
            const rawInput = '1001101';

            const result = convertToBits(rawInput);

            expect(result).toEqual([1,0,0,1,1,0,1]);
        });
    });

    describe('mostCommonBits', () => {
        it.each([0, 1])('given just %i, returns %i', (num) => {
            const bits = [[num]];

            const result = mostCommonBits(bits);

            expect(result).toEqual([num]);
        });

        it('given 0,0,1, returns 0', () => {
            const bits = [[0],[0],[1]];

            const result = mostCommonBits(bits);

            expect(result).toEqual([0]);
        });

        it('given 0,1,1, returns 1', () => {
            const bits = [[0],[1],[1]];

            const result = mostCommonBits(bits);

            expect(result).toEqual([1]);
        });

        it('given numbers in the example, returns expected result', () => {
            const bits = [
                [0,0,1,0,0],
                [1,1,1,1,0],
                [1,0,1,1,0],
                [1,0,1,1,1],
                [1,0,1,0,1],
                [0,1,1,1,1],
                [0,0,1,1,1],
                [1,1,1,0,0],
                [1,0,0,0,0],
                [1,1,0,0,1],
                [0,0,0,1,0],
                [0,1,0,1,0]
            ];

            const result = mostCommonBits(bits);

            expect(result).toEqual([1,0,1,1,0]);
        });
    });

    describe('bitsToDecimal', () => {
        it.each([0, 1])('given %i, should return %i', (num) => {
            const bits = [num];

            const result = bitsToDecimal(bits);

            expect(result).toEqual(num);
        });

        it('given 11, should return 3', () => {
            const bits = [1,1];

            const result = bitsToDecimal(bits);

            expect(result).toEqual(3);
        });

        it('given 10110, should return 22', () => {
            const bits = [1,0,1,1,0];

            const result = bitsToDecimal(bits);

            expect(result).toEqual(22);
        });
    });

    describe('groupByBit', () => {
        it('groups bitArrays by bit position 0', () => {
            const bitArrays = [
                [0,1,1,0,1],
                [1,0,1,1,0],
                [1,1,0,0,1],
                [1,0,0,1,0],
                [0,1,1,0,1]
            ];

            const result = groupByBit(bitArrays, 0);

            expect(result[0]).toEqual([
                [0,1,1,0,1],
                [0,1,1,0,1]
            ]);
            expect(result[1]).toEqual([
                [1,0,1,1,0],
                [1,1,0,0,1],
                [1,0,0,1,0]
            ]);
        });

        it('groups bitArrays by bit position 2', () => {
            const bitArrays = [
                [0,1,1,0,1],
                [1,0,1,1,0],
                [1,1,0,0,1],
                [1,0,0,1,0],
                [0,1,1,0,1]
            ];

            const result = groupByBit(bitArrays, 2);

            expect(result[0]).toEqual([
                [1,1,0,0,1],
                [1,0,0,1,0]
            ]);
            expect(result[1]).toEqual([
                [0,1,1,0,1],
                [1,0,1,1,0],
                [0,1,1,0,1]
            ]);
        });
    });

    describe('reduceBitArrays', () => {
        const EXAMPLE_INPUT = [
            [0,0,1,0,0],
            [1,1,1,1,0],
            [1,0,1,1,0],
            [1,0,1,1,1],
            [1,0,1,0,1],
            [0,1,1,1,1],
            [0,0,1,1,1],
            [1,1,1,0,0],
            [1,0,0,0,0],
            [1,1,0,0,1],
            [0,0,0,1,0],
            [0,1,0,1,0]
        ];

        it('produces correct maximum from example', () => {
            const result = reduceBitArrays(EXAMPLE_INPUT, 1);
            
            expect(result).toEqual([1,0,1,1,1]);
        });

        it('produces correct minimum from example', () => {
            const result = reduceBitArrays(EXAMPLE_INPUT, 0);

            expect(result).toEqual([0,1,0,1,0]);
        });
    });
});