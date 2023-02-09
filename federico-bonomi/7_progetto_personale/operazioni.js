function inserisciDomanda()
{
    const nuovaDomanda = document.createElement('li');
    nuovaDomanda.appendChild(creaSezione('nomeUtenteDomanda','strong'));
    nuovaDomanda.appendChild(creaSezione('titolo','h2'));
    nuovaDomanda.appendChild(creaSezione('domanda', 'p'));

    //creo il form di risposta
    const form=document.createElement('form');

    //creo input nome utente
    const nomeUtente = document.createElement("input");
    nomeUtente.setAttribute("type", "text");
    nomeUtente.setAttribute("id", "nomeUtenteRisposta");
    nomeUtente.setAttribute("placeholder", "Nome utente");

    //creo input risposta
    const risposta = document.createElement("input");
    risposta.setAttribute("type", "text");
    risposta.setAttribute("id", "risposta");
    risposta.setAttribute("placeholder", "Risposta");

    //creo bottone
    const bottone=document.createElement("button");
    bottone.setAttribute("type","button");
    bottone.setAttribute("onclick", "aggiungiRisposta()");
    bottone.innerText="Rispondi";

    form.appendChild(nomeUtente);
    form.appendChild(risposta);
    form.appendChild(bottone);

    const domande = document.getElementById('domande');
    nuovaDomanda.setAttribute('class', 'domanda');

    domande.appendChild(nuovaDomanda);
    domande.appendChild(form);
}

function creaSezione(inputId, tipo)
{
    const elemento = document.getElementById(inputId).value;
    const nuovoElemento = document.createElement(tipo);
    nuovoElemento.innerText =elemento;
    return nuovoElemento;
}

function aggiungiRisposta()
{
    console.log("ciao");
}