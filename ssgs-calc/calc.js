const { resolve } = require('path');
const op = require('./operazioni');
//definizione di interfaccia per gestire I/O
const readLine = require('readline');
const { Console } = require('console');

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
    
    console.log("  Benvenuto, questa è la calcolatrice semplice sviluppata in NodeJs richiesta -- CalcJs (a soli due numeri) ");
    let a, b;
    while(isNaN(a) || isNaN(b)){    
        a = parseFloat(await richiestaInput("Inserisci primo numero: "));
        b = parseFloat(await richiestaInput("Inserisci secondo numero: "));
    }
    /* per interrompere il programma e non farlo proseguire
    if(isNaN(a)){
        console.error( "Input invalido");
        rl.close();
        process.exit(1);
    }
   */
    let operazione;
    do{
        console.log(" ------------ MENU ------------");
        console.log("   1. Somma");
        console.log("   2. Differenza");
        console.log("   3. Divisione");
        console.log("   4. Moltiplicazione");
        console.log("   5. Potenza");
        console.log("   6. Modulo");
        console.log("   7. Inserimento dei due numeri");
        console.log("   0. Fine");
        operazione = parseInt(await richiestaInput("Inserisci l'operazione che desideri effettuare: "));
        while(isNaN(operazione) || operazione < 0 || operazione > 7){
            operazione = parseInt(await richiestaInput("Inserisci l'operazione che desideri effettuare: "));
        }
        switch(operazione){
            case 1:
                console.log("Somma pari a: ", op.somma(a,b));
                break;
            case 2:
                console.log("Differenza pari a: ",op.differenza(a,b));
                break;
            case 3:
                if(op.divisione(a,b) == null) console.error('Impossibile effettuare divisione con denominatore = 0');
                else console.log("Divisione pari a: ",op.divisione(a,b));
                break;
            case 4:
                console.log("Moltiplicazione pari a: ",op.moltiplicazione(a,b));
                break;
            case 5:
                console.log("Potenza pari a: ",op.pow(a,b));
                break;
            case 6:
                a = op.sign(a);
                b = op.sign(b);
                console.log("Moduli dei due numeri pari a: ",a,b);
                break;
            case 7:
                do{    
                    a = parseFloat(await richiestaInput("Inserisci primo numero: "));
                    b = parseFloat(await richiestaInput("Inserisci secondo numero: "));
                }while(isNaN(a) || isNaN(b))
                break;
            default:
                break;

        }
    }while(operazione != 0);
    console.log("Grazie per aver usato CalcJS, a presto!");
    rl.close();
}

main();