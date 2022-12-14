const stringLength = require ('./stringLength');

describe('length of strings', () => {
    test('length of "house"', () => {
        expect(stringLength('house')).toBe(5);
    })
});