const { resolve } = require('path');
const op = require('./operazioni');
//definizione di interfacci per gestire I/O
const readLine = require('readline');
const rl =  readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function richiestaInput(richiesta){
    //question stampa in output il primo parametro e attende  l'input
    return new Promise((resolve) => {
        rl.question(richiesta, resolve); // richiesta è ciò che stampa, resolve (callback) è la funzione che riceve la risposta dell'utente
    });
}


async function main(){
    const a = parseFloat(await richiestaInput("Inserisci primo numero: "));
    const b = 4;
    console.log(op.somma(a,b));
    rl.close();
}

main();