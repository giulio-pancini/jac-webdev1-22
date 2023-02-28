/*  
    BTecno - Assistenza informatica | web | app

    INTERFACCIA FAST FOOD (mc like)

    Funzioni: Aggiunta al carrello, Elimina dal carrello, filtro ricerca
    (avanzato(?)) modifica del prodotto
    (avanzato) Ricerca (Eliminando tutti i prodotti che non hanno all'interno del nome la parola selezionata)

    Classe "ordine": Nome ordine, prezzo, array di ingredienti(?)

    Carrello (sulla stessa pagina): Tabella con gli ordini visualizzati (filtro ordine?) con la possibilità di eliminarli
    (guardare come eliminare un elemento da un array e aggiornare una tabella senza aggiornare la pagina html)
*/

/*

/*
    APPEND CHILD SCHEME:

    TABLE
        THEAD
        TBODY
            TR
                TH
                TD
    
    modifica degli ingredienti o dalla tabella carrello o prima dell'acquisto

    prima dell'aggiunta al carrello: 
        td ingredienti: hover per visualizzare la lista di ingredienti
        button a fianco dell'ingrediente: cliccando ho viene tolto il testo o viene colorato di rosso (magari utilizzare l'alert per avvisare l'utente)

    dopo l'aggiunta al carrello:
        nella tabella poter selezionare un prodotto, creerà una nuova tabella (temporanea(?))

*/

class Product {
    constructor(id, name, price,){
        this.id;
        this.name = name;
        this.price = price;
    }
}

class Burger extends Product {
    constructor(id, name, price, ingredients) {
        super(id, name, price);
        this.ingredients = ingredients;
    }
}

class Drink extends Product {
    constructor(id, name, price, size){
        super(id, name, price)
        this.size = size;
    }
}

const Products = [];

let counter = 1;
const cart = [];

function addBurgerToCart() {

    const panino = event.target.value;
    
    const b = new Burger();

    if(panino == "Crispy"){
        b.id = counter;
        b.name = "Crispy";
        b.price = 6.50;
        b.ingredients = ["Pane", "Carne Bovina", "Cheddar", "Bacon", "Salsa Crispy"];
    }else if(panino == "Filet-O-Fishn't"){
        b.id = counter;
        b.name = "Filet-O-Fishn't";
        b.price = 5.00;
        b.ingredients = ["Pane", "Merluzzo impanato", "Cheddar", "Salsa tartara"];
    }else if(panino == "Cheesburgern't"){
        b.id = counter;
        b.name = "Cheesburgern't";
        b.price = 5.50;
        b.ingredients = ["Pane", "Carne Bovina", "Cheddar", "Cipolla", "Ketchup & Senape"];
    }else if(panino == "His Selection"){
        b.id = counter;
        b.name = "His Selection";
        b.price = 7.50;
        b.ingredients = ["Insalata", "Carne Bovina", "Guoda stagionato", "Bacon", "Salsa BBQ"];
    }else if(panino == "Mcn't Toast"){
        b.id = counter;
        b.name = "Mcn't Toast";
        b.price = 1.75;
        b.ingredients = ["Pane", "Prosciutto Cotto", "Formaggio Fuso"];
    }else if(panino == "Bonsin't ChickenBurger"){
        b.id = counter; 
        b.name = "Bonsin't ChickenBurger";
        b.price = 6.50;
        b.ingredients = ["Pane", "Pollo Impanato", "Cheddar", "Lattuga", "Salsa BBQ"];
    }

    addBurgerToTable(panino, b.price);
    console.log(b);

}

function addBurgerToTable(product, price) {

    const newElementTr = document.createElement('tr');
    const newElementTh = document.createElement('th');

    const newElementTd = document.createElement('td');
    const txtBurger = document.createTextNode(product);

    const newElemntTdPrice = document.createElement('td');
    const txtPrice = document.createTextNode(price);

    newElemntTdPrice.appendChild(txtPrice);

    const txt = document.createTextNode(counter);

    newElementTh.setAttribute('class', 'scope="row"');

    newElementTr.appendChild(newElementTh);
    newElementTh.appendChild(txt);
    newElementTr.appendChild(newElementTd);
    newElementTd.appendChild(txtBurger);
    
    newElementTr.appendChild(newElemntTdPrice);

    document.getElementById('tableBody').appendChild(newElementTr);

    counter++;
}
