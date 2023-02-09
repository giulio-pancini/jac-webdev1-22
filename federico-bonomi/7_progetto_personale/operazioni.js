let indice=0;

function inserisciDomanda()
{
    indice++;
    const nuovaDomanda = document.createElement('li');
    nuovaDomanda.appendChild(creaSezione('nomeUtenteDomanda','strong'));
    nuovaDomanda.appendChild(creaSezione('titolo','h2'));
    nuovaDomanda.appendChild(creaSezione('inputDomanda', 'p'));

    const bottoneForm=document.createElement('button');
    bottoneForm.innerText="Nascondi Form";
    bottoneForm.setAttribute("onclick", "nascondiForm('form"+indice+"','bottone"+indice+"')");
    bottoneForm.setAttribute("id","bottone"+indice);
    nuovaDomanda.appendChild(bottoneForm);

    //creo il form di risposta
    const form=document.createElement('form');
    form.setAttribute("id","form"+indice);
    form.setAttribute("class","compari");

    //creo input nome utente
    const nomeUtente = document.createElement("input");
    nomeUtente.setAttribute("type", "text");
    nomeUtente.setAttribute("id", "nomeUtente"+indice);
    nomeUtente.setAttribute("placeholder", "Nome utente");

    //creo input risposta
    const risposta = document.createElement("input");
    risposta.setAttribute("type", "text");
    risposta.setAttribute("id", "risposta"+indice);
    risposta.setAttribute("class", "inputRisposta");
    risposta.setAttribute("placeholder", "Risposta");

    //creo bottone
    const div=document.createElement("div");
    const bottone=document.createElement("button");
    bottone.setAttribute("type","button");
    bottone.setAttribute("onclick", "aggiungiRisposta("+indice+")");
    bottone.innerText="Rispondi";
    div.appendChild(bottone);

    //creo la sezione dei commenti
    const sezioneCommenti=document.createElement("ul");
    sezioneCommenti.setAttribute("id",indice);

    form.appendChild(nomeUtente);
    form.appendChild(risposta);
    form.appendChild(div);

    const domande = document.getElementById('domande');
    nuovaDomanda.setAttribute('class', 'domanda');

    nuovaDomanda.appendChild(form);
    nuovaDomanda.appendChild(sezioneCommenti);
    domande.appendChild(nuovaDomanda);
}

function creaSezione(inputId, tipo)
{
    const elemento = document.getElementById(inputId).value;
    const nuovoElemento = document.createElement(tipo);
    nuovoElemento.innerText =elemento;
    return nuovoElemento;
}

function aggiungiRisposta(parametro)
{
    const nuovaRisposta = document.createElement('li');
    nuovaRisposta.appendChild(creaSezione('nomeUtente'+parametro,'strong'));
    nuovaRisposta.appendChild(creaSezione('risposta'+parametro,'p'));

    const risposte = document.getElementById(parametro);
    nuovaRisposta.setAttribute('class', 'risposta');

    risposte.appendChild(nuovaRisposta);
}

function nascondiForm(parametro, bottoneForm)
{
    console.log(parametro);
    const stato=document.getElementById(parametro);
    if(stato.getAttribute("class")=="scompari")
    {
        stato.setAttribute("class","comapri");
        const bottone=document.getElementById(bottoneForm).innerText="Nascondi Form";
    }
    else
    {
        stato.setAttribute("class","scompari");
        const bottone=document.getElementById(bottoneForm).innerText="Mostra Form";
    }
}