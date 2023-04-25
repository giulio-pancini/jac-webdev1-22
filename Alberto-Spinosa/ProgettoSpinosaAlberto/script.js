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
        this.id = id;
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

const prova = new Drink(1, "nome", 2.50, "size");
console.log(prova);

function addBurgerToCart() {

    const selection = event.target.value;
    var burger;

    if(selection == "Crispy"){

        burger = new Burger(counter, "Crispy", 6.50, ["Pane", "Carne Bovina", "Cheddar", "Bacon", 
        "Salsa Crispy"]);

    }else if(selection == "Filet-O-Fishn't"){

        burger = new Burger(counter, "Filet-O-Fishn't", 5.00, ["Pane", "Merluzzo impanato", "Cheddar", 
        "Salsa tartara"])

    }else if(selection == "Cheesburgern't"){

        burger = new Burger(counter, "Cheesburgern't", 5.50, ["Pane", "Carne Bovina", "Cheddar", "Cipolla", 
        "Ketchup & Senape"]);

    }else if(selection == "His Selection"){

        burger = new Burger(counter, "His Selection", 7.50, ["Insalata", "Carne Bovina", "Guoda stagionato", 
        "Bacon", "Salsa BBQ"]);
        
    }else if(selection == "Mcn't Toast"){

        burger = new Burger(counter, "Mcn't Toast", 1.75, ["Pane", "Prosciutto Cotto", "Formaggio Fuso"]);

    }else if(selection == "Bonsin't ChickenBurger"){

        burger = new Burger(counter, "Bonsin't ChickenBurger", 6.50, ["Pane", "Pollo Impanato", "Cheddar", 
        "Lattuga", "Salsa BBQ"]);

    }
    
    counter++;
    addBurgerToTable(burger);
    Products.push(burger);
    console.log(burger);

}

function addDrinkToCart(element) {
    
    const selection = element.dataset.value;
    var drink;

    if (selection == "Coca-Cola"){
        
        drink = new Drink(counter, "Coca-Cola", 2.50, "Medium");
    }else if (selection == "Pepsi"){
        drink = new Drink(counter, "Pepsi", 2.50, "Medium");
    }else if (selection == "Tè-Pesca"){
        drink = new Drink(counter, "Tè-Pesca", 2.50, "Medium");
    }else if (selection == "Tè-Limone"){
        drink = new Drink(counter, "Tè-Limone", 2.50, "Medium");
    }else if (selection == "Acqua-Naturale"){
        drink = new Drink(counter, "Acqua Naturale", 1.50, "Medium");
    }else if (selection == "Acqua-Frizzante"){
        drink = new Drink(counter, "Acqua Frizzante", 1.50, "Medium");
    }else if (selection == "Fanta"){
        drink = new Drink(counter, "Fanta", 2.50, "Medium");
    }else if (selection == "Birra"){
        drink = new Drink(counter, "Birra", 3.00, "Medium");
    }else if (selection == "RedBull"){
        drink = new Drink(counter, "RedBull", 3.00, "Standard");
    }

    counter++;
    console.log(selection)
    addBurgerToTable(drink);
    Products.push(drink);
    console.log(drink);
}

function addBurgerToTable(product) {

    const newElementTr = document.createElement('tr');
    const newElementTh = document.createElement('th');

    const newElementTd = document.createElement('td');
    const txtBurger = document.createTextNode(product.name);

    const newElemntTdPrice = document.createElement('td');
    const txtPrice = document.createTextNode(product.price);

    const newElementTdIngr = document.createElement('td');
    const txtIngr = document.createTextNode(product.ingredients);

    const newElementTdSize = document.createElement('td');
    const txtSize = document.createTextNode(product.size);

    const newElementTdAct = document.createElement('td');
    const newButtonDelete = document.createElement('button');
    const newButtonEdit = document.createElement('button');
    const txtDelete = document.createTextNode("❌");
    const txtEdit = document.createTextNode("✏️");
        
    const txt = document.createTextNode(product.id);

    newElementTh.setAttribute('class', 'scope="row"');

    console.log(txtIngr)
    console.log(txtSize)

    // Append nome panino
    newElementTr.appendChild(newElementTh);
    newElementTh.appendChild(txt);
    newElementTr.appendChild(newElementTd);
    newElementTd.appendChild(txtBurger);

    // Append prezzo
    newElemntTdPrice.appendChild(txtPrice);
    newElementTr.appendChild(newElemntTdPrice);

    //Append Ingredienti
    if(txtIngr == "undefined"){
        newElementTdSize.appendChild(txtSize);
        newElementTr.appendChild(newElementTdSize);
    }else {
        newElementTdIngr.appendChild(txtIngr);
        newElementTr.appendChild(newElementTdIngr);
    }

    //Append Actions
    newButtonDelete.appendChild(txtDelete);
    newButtonEdit.appendChild(txtEdit);
    newElementTdAct.appendChild(newButtonDelete);
    newElementTdAct.appendChild(newButtonEdit);
    newElementTr.appendChild(newElementTdAct);

    document.getElementById('tableBody').appendChild(newElementTr);

}

function addDrinkToTable (product) {

}
