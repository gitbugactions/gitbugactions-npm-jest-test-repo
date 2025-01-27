const AppMath = require('../../main/js/appMath');

describe('AppMath', () => {
    let appMath;

    beforeEach(() => {
        appMath = new AppMath();
    });

    test('sum adds two numbers correctly', () => {
        expect(appMath.sum(1, 2)).toBe(3);
    });

    test('subtract subtracts two numbers correctly', () => {
        expect(appMath.subtract(2, 1)).toBe(1);
    });

    test('multiply multiplies two numbers correctly', () => {
        expect(appMath.multiply(2, 2)).toBe(4);
    });

    test('sumTwice adds the second number twice', () => {
        expect(appMath.sumTwice(2, 2)).toBe(6);
    });

    test('subtractTwice subtracts the second number twice', () => {
        expect(appMath.subtractTwice(6, 2)).toBe(2);
    });
});