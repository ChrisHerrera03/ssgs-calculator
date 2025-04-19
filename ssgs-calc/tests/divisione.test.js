const op = require('../operazioni');

test('6 diviso 0 è impossibile', () =>{
    expect(op.divisione(6,0)).toBeNull();
});
test('6 diviso 2 è 3', () =>{
    expect(op.divisione(6,2)).toBe(3);
});
test('-6 diviso -3 è 2', () =>{
    expect(op.divisione(-6,-3)).toBe(2);
});