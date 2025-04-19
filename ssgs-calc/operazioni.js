function somma(a, b){
    return a + b;
}
function differenza(a,b){
    return a - b;
}
function divisione(a,b){
    if(b == 0) return null; //throw new Error, gestito come Errore
    return a / b;
}
function moltiplicazione(a,b){
    return a * b;
}
function pow(a,b){
    return Math.pow(a,b);
}
function sign(a) {
    return a > 0 ? a : -a;
}
function swapsign(a){
    if(a == 0) return 0;
    return -a;
}
function fact(a){
    if(a < 0) return null; // throw new Error, gestito come Errore
    if(a == 0) return 1;
    return a * fact(a-1);
}

module.exports = {
    somma,
    differenza,
    moltiplicazione,
    divisione,
    pow,
    swapsign,
    sign,
    fact
};
