const op = require('../operazioni');

test('6 * 2 = 12', () =>{
    expect(op.moltiplicazione(6,2)).toBe(12);
});
test('-6 * -2 = 12', () =>{
    expect(op.moltiplicazione(-6,-2)).toBe(12);
});
test('-6 * 3 = -18', () =>{
    expect(op.moltiplicazione(-6,3)).toBe(-18);
});