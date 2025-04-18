function somma(a, b){
    return a + b;
}
function differenza(a,b){
    return a - b;
}
function divisione(a,b){
    if(b == 0) throw new console.error();
    return a / b;
}
function moltiplicazione(a,b){
    return a * b;
}
module.exports = {
    somma,
    differenza,
    moltiplicazione,
    divisione
};