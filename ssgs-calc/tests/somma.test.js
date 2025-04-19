const op = require('../operazioni');
test('somma tra 2 e 2 è uguale a 4', () => {
    expect(op.somma(2,2)).toBe(4);
});
test('somma tra 3 e 5 è uguale a 7', () => {
    expect(op.somma(3,5)).toBe(8);
})

test('somma tra -3 e -5 è uguale a -8', () => {
    expect(op.somma(-3,-5)).toBe(-8);
})