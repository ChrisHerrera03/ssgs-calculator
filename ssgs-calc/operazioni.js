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
function pow(a,b){
    if(b < 0 ) throw new error("Impossibile eseguire con il secondo termine < 0");
    if(b == 0) return 1;
    return a*pow(a,b-1);
}
function swapsign(a){
    return -a;
}
function fact(a){
    if(a < 0) throw new error("Impossibile eseguire l'operazione con  il termine < 0")
    if(a = 0) return 1;
    return a * fact(a-1);
}

module.exports = {
    somma,
    differenza,
    moltiplicazione,
    divisione,
    pow,
    swapsign,
    fact
};
