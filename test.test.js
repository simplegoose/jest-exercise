const reverseString = require('./reverseString');
const stringLength = require('./stringLength');
const capitalizeString = require('./capitalize');
const Calculator = require('./calculator');

describe('string_methods', () => {
  test('should return string length', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('should capitalize the first letter of a string', () => { 
    expect(capitalizeString('hello')).toBe('Hello');
  });
});

describe('calculator', () => { 
  const calculator = new Calculator();

  test('should add two numbers', () => { 
    const add = calculator.add;

    expect(add(2, 5)).toBe(7);
  });

  test('should subtract two numbers', () => { 
    const subtract = calculator.subtract;

    expect(subtract(8, 5)).toBe(3);
  });

  test('should multiply two numbers', () => { 
    const multiply = calculator.multiply;

    expect(multiply(2, 5)).toBe(10);
  });
});