const stringLength = require ('./stringLength');
const reverseString = require('./reverseString');

describe('length of strings', () => {
    test('length of "house"', () => {
        expect(stringLength('house')).toBe(5);
    });

    test('length of ""', () => {
        expect(stringLength('')).toBe('input not valid');
    });

    test('length of "aaaaaaaaaaaa"', () => {
        expect(stringLength('aaaaaaaaaaaa')).toBe('input not valid');
    });
});

describe('reverseStrings', () => {
    test('reverse strings 1', () => {
        expect(reverseString('match')).toBe('hctam');
    });
});