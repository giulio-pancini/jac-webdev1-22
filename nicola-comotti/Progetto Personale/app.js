function toggleMenu() {

    const expMenuElement = document.getElementById('menu');
    if (expMenuElement.style.display != "block") {
        expMenuElement.style.display = "block";
    } else {
        expMenuElement.style.display = "none"
    }

}

function addExe() {

    const newExe = document.createElement('li');

    const inputScheda = document.getElementById('sceltaScheda');
    const scheda = inputScheda.value;
    const inputNome = document.getElementById('nome');
    const nome = inputNome.value;
    const inputPeso = document.getElementById('peso');
    const peso = inputPeso.value;
    const inputSerie = document.getElementById('serie');
    const serie = inputSerie.value;
    const inputRep = document.getElementById('rep');
    const rep = inputRep.value;
    const inputRest = document.getElementById('rest');
    const rest = inputRest.value;

    const testoNome = document.createElement('h3');
    testoNome.innerText = nome;
    const testoPeso = document.createElement('p');
    testoPeso.innerText = peso + " Kg | ";
    const testoSerie = document.createElement('p');
    testoSerie.innerText = serie + " serie | ";
    const testoRep = document.createElement('p');
    testoRep.innerText = rep + " rep | ";
    const testoRest = document.createElement('p');
    testoRest.innerText = rest + "s rest";

    newExe.appendChild(testoNome);
    newExe.appendChild(testoPeso);
    newExe.appendChild(testoSerie);
    newExe.appendChild(testoRep);
    newExe.appendChild(testoRest);

    newExe.setAttribute('class', 'esercizio');

    const schedaPush = document.getElementById('schedaPush');
    const schedaPull = document.getElementById('schedaPull');
    const schedaLegs = document.getElementById('schedaLegs');

    switch (scheda) {
        case 'push':
            schedaPush.appendChild(newExe);
            break;
        case 'pull':
            schedaPull.appendChild(newExe);
            break;
        case 'legs':
            schedaLegs.appendChild(newExe);
            break;
        case 'none':
            alert("NESSUNA SCHEDA SELEZIONATA!!");
            break;
    }

}

// function addScheda() {}
