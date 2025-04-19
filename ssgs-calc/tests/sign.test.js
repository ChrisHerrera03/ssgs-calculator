const op = require('../operazioni');

test('| 6 | = 6', () =>{
    expect(op.sign(6)).toBe(6);
});
test('| -8 | = 8', () =>{
    expect(op.sign(-8)).toBe(8);
});