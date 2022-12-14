const stringLength = require ('./stringLength');
const reverseString = require('./reverseString');
const calculator = require('./calculator');

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

describe('reverseString', () => {
    test('reverseString of"match', () => {
        expect(reverseString('match')).toBe('hctam');
    });
});

const calc1 = new calculator(8, 2);
const calc2 = new calculator(16, 4);
const calc3 = new calculator(20, 5);

describe('Addition Function Tests', () => {
    test('Addition of 8 & 2', () => {
      expect(calc1.add()).toBe(10);
    });
    test('Addition of 16 & 4', () => {
      expect(calc2.add()).toBe(20);
    });
    test('Addition of 20 & 5', () => {
      expect(calc3.add()).toBe(25);
    });
  });

  describe('multiplication Function Tests', () => {
    test('multiplication of 8 & 2', () => {
      expect(calc1.multiply()).toBe(16);
    });
    test('multiplication of 16 & 4', () => {
      expect(calc2.multiply()).toBe(64);
    });
    test('multiplication of 20 & 5', () => {
      expect(calc3.multiply()).toBe(100);
    });
  });

  describe('division Function Tests', () => {
    test('division of 8 & 2', () => {
      expect(calc1.divide()).toBe(4);
    });
    test('division of 16 & 4', () => {
      expect(calc2.divide()).toBe(4);
    });
    test('division of 20 & 5', () => {
      expect(calc3.divide()).toBe(4);
    });
  });

  describe('subtraction Function Tests', () => {
    test('subtraction of 8 & 2', () => {
      expect(calc1.subtract()).toBe(6);
    });
    test('subtraction of 16 & 4', () => {
      expect(calc2.subtract()).toBe(12);
    });
    test('subtraction of 20 & 5', () => {
      expect(calc3.subtract()).toBe(15);
    });
  });