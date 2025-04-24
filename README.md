# SSGS-Calculator
## Creazione di una calcolatrice in Node.JS
### 📋 Il progetto è stato sviluppato in **Node.JS** e contiene le seguenti funzionalità richieste:

> * **L’interazione** con l’utente avviene attraverso la **riga di comando**.
> * Al lancio, il programma mostra un **messaggio di benvenuto** e la **lista delle operazioni**
supportate.
> * L’utente può selezionare l’operazione desiderata tra quelle disponibili.
> * In base all’operazione selezionata, il programma richiede l’inserimento dei parametri
necessari per eseguire l’operazione.
> * Se l’utente inserisce un parametro invalido, il programma segnala l’errore e interrompe
l’esecuzione.
> * Dopo che l’utente ha inserito i parametri corretti, il programma restituisce il risultato
dell’operazione e termina l’esecuzione con un saluto.



### Tra quelle aggiuntive, invece sono state scelte:
> * Estendere l’insieme di operazioni supportate (ad esempio, aggiungendo le potenze)
> * Migliorare il comportamento del programma in caso di parametro errato (ad esempio,
segnalare l’errore e consentire all’utente di riprovare, anziché terminare l’esecuzione).
> * Mostrare un saluto random prima di terminare l’esecuzione

[ Testo di riferimento del progetto ( __*6.1*__ e __*6.2*__)](https://github.com/ChrisHerrera03/ssgs-calculator/blob/main/ssgs-calc/progetto_riferimento.pdf)

## Richieste fatte dal professore:
1. Creazione del progetto /ssgs-calc sviluppato in Node.js e sotto controllo di versione in GitHub.
2. Il progetto deve avere un file README che ne spieghi lo scopo.
3. Funzionalità sviluppate secondo le indicazioni contenute nel Laboratorio 6 Esercizio 2.
4. Presentare Unit test con coverage 100%, senza errori nei test. 
5. Sviluppare pipeline per l'esecuzione dei test come GitHub Actions, con almeno un'esecuzione visibile nell'apposita sezione su GitHub.
6. La code coverage dovrebbe essere visibile nei risultati della GitHub Actions.

## Scopo del progetto:
Creazione di una calcolatrice in NodeJs con il fine di migliorare l'utilizzo di GitHub, con cui grazie a GitHub Actions, abbiamo creato una pipeline CI/CD.
E' stato anche necessario riuscire ad esporre i risultati dei test aggiungendo semplicemente la seguente riga di codice nel file package.json
```json
    "test": "jest --coverage --coverageReporters=text --coverageDirectory=coverage",
```