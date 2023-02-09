/*  
    INTERFACCIA FAST FOOD (mc like)

    Funzioni: Aggiunta al carrello, Elimina dal carrello, filtro ricerca
    (avanzato(?)) modifica del prodotto
    (avanzato) Ricerca (Eliminando tutti i prodotti che non hanno all'interno del nome la parola selezionata)

    Classe "ordine": Nome ordine, prezzo, array di ingredienti(?)

    Carrello (sulla stessa pagina): Tabella con gli ordini visualizzati (filtro ordine?) con la possibilità di eliminarli
    (guardare come eliminare un elemento da un array e aggiornare una tabella senza aggiornare la pagina html)
*/

/*
const check = false;

document.getElementById("burger1").addEventListener("click", function () {

    if (check == false) {

        const nuovoElementoParagrafo = document.createElement("p");
        nuovoElementoParagrafo.setAttribute("id", "paragrafoNuovo")
        const elementoContainer = document.getElementById("contenitore");

        elementoContainer.appendChild(nuovoElementoParagrafo);

        const txt = document.createTextNode("Panino del mcdonald con la mia gang");
        nuovoElementoParagrafo.appendChild(txt);

        check = true;

    }else if (check == true){
        var paragrafo = document.getElementById("paragrafoNuovo");
        paragrafo.parentNode.removeChild(paragrafo);
    }

});
*/

function showDetails() {
    
    const expandElementItem = document.getElementById("expand-item");
}