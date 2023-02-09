const list = ['a', 1, 'b', 2, 'c', 3];

//LET I (cicla sugli indici)
for(let i in list) {
    console.log(list[i]);
}

//LET OF (cicla su valori correnti)
for(let elementoCorrente of list) {
    console.log(elementoCorrente);
}

//FOR EACH (come parametro accetta una funzione, dunque non si scriverà con le parentesi)
function stampaArray(elementoCorrente) {
    console.log(elementoCorrente);
}

list.forEach(stampaArray);

//modo più abbreviato sono le funzioni anonime
list.forEach(function (elementoCorrente) {
    console.log(elementoCorrente);
});

//ARROW FUNCTION
list.forEach(elementoCorrente => console.log(elementoCorrente));
/*se ho solo un parametro posso non usare le tonde (come si vede nella riga sopra), se la funzione è un'unica istruzione posso togliere le graffe
se è un return posso anche non scriverlo. ESEMPIO */
num => num + 10;
//è come dichiarare una funzione a cui passiamo num num e in cui c'è il return di num+10

//nuova tipologia
const mappa = new Map();

/*p.rossi, s.manzoni sono le chiavi, con il set associamo alla chiave il suo valore (paolo.rossi@gmail.com, saramazzoni2000.sm@gmail.com),
con il get otteniamo il valore corrispondente dando come input la chiave */
mappa.set("p.rossi", "paolo.rossi@gmail.com");
mappa.set("s.manzoni", "saramazzoni2000.sm@gmail.com");

console.log(mappa.get("p.rossi"));
