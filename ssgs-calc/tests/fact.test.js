const op = require('../operazioni');

test('5! = 120', () => {
    expect(op.fact(5)).toBe(120);
})

test('0! = 1', () => {
    expect(op.fact(0)).toBe(1);
})

test(' -1! impossibile da fare', () =>{
    expect(op.fact(-1)).toBeNull();
})
