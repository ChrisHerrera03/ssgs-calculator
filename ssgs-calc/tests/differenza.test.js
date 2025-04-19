const op = require('../operazioni');

test("3 - 2 è uguale a 1", () => {
    expect(op.differenza(3,2)).toBe(1);
});

test("1 - 2 è uguale a 1", () => {
    expect(op.differenza(1,2)).toBe(-1);
});

test("-4 - (-2) è uguale a -2", () => {
    expect(op.differenza(-4,-2)).toBe(-2);
});