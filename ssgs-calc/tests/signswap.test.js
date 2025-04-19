const op = require('../operazioni');

test('| 0 | = 0', () =>{
    expect(op.swapsign(0)).toBe(0);
});
test('| 6 | = 6', () =>{
    expect(op.swapsign(6)).toBe(-6);
});
test('| -8 | = 8', () =>{
    expect(op.swapsign(-8)).toBe(8);
});