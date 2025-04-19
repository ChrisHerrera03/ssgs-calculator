const op = require('../operazioni');

test('2 ^ 3 = 8', () =>{
    expect(op.pow(2,3)).toBe(8);
});
test('2 ^ 0 = 1', () =>{
    expect(op.pow(2,0)).toBe(1);
});
test('2 ^ -1 = 0.5', () =>{
    expect(op.pow(2,-1)).toBe(0.5);
});