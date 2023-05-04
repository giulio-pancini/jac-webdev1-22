function toggleMenu() {
    const expMenuElement = document.getElementById('menuMobile');

    // Media query per monitorare la larghezza della finestra del browser
    var x = window.matchMedia("(max-width: 850px)")
    // Funzione che viene chiamata al cambio di larghezza della finestra del browser
    myFunction(x)
    // Aggiunge un listener per il cambiamento della larghezza della finestra del browser
    x.addListener(myFunction)

    // Funzione che gestisce l'apertura e la chiusura del menu mobile in base alla larghezza della finestra del browser
    function myFunction(x) {
        if (x.matches && expMenuElement.style.display == "block") {
            expMenuElement.style.display = "none";
        } else if (x.matches && expMenuElement.style.display == "none") {
            expMenuElement.style.display = "block";
        } else {
            expMenuElement.style.display = "none";
        }
    }
}

function logout() {
    window.location.href = "login-page.html";
}

/* 
? Funzione che DOVREBBE fare la fetch degli esercizi dalla mia API in Eclipse

async function fetchEsercizi() {
    const response = await fetch("http://localhost:8080/esercizioAPI/listaesercizi");
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    jsonResponse.products.forEach(product => {
        const elemento = document.createElement('li');
        document.getElementById('prodotti').appendChild(elemento);
        elemento.innerHTML = product;
    });
}
*/

