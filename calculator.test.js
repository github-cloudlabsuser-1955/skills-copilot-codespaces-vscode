const Calculator = require('./test');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add', () => {
        calculator.add(5);
        expect(calculator.getValue()).toBe(5);
    });

    test('subtract', () => {
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.getValue()).toBe(5);
    });

    test('multiply', () => {
        calculator.add(5);
        calculator.multiply(2);
        expect(calculator.getValue()).toBe(10);
    });

    test('divide', () => {
        calculator.add(10);
        calculator.divide(2);
        expect(calculator.getValue()).toBe(5);
    });

    test('divide by zero', () => {
        calculator.add(10);
        calculator.divide(0);
        expect(calculator.getValue()).toBe(Infinity);
    });

    test('getValue', () => {
        expect(calculator.getValue()).toBe(0);
    });
});