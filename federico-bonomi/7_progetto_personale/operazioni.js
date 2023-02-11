let indice=0;

function inserisciDomanda()
{
    indice++;
    const nuovaDomanda = document.createElement('li');

    const d=new Date();
    const giorno=String(d.getDate()).padStart(2, '0');
    const mese = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const anno = d.getFullYear();
    const orario=`${d.getHours()}:${d.getMinutes()}`;
    const data=`${orario} del ${giorno}/${mese}/${anno}`;


    nuovaDomanda.appendChild(creaSezione('nomeUtenteDomanda','strong'));

    const sezioneData=document.createElement('p');
    sezioneData.innerText=data;
    sezioneData.setAttribute("class","data");

    nuovaDomanda.appendChild(sezioneData);
    nuovaDomanda.appendChild(creaSezione('titolo','h2'));
    nuovaDomanda.appendChild(creaSezione('inputDomanda', 'p'));


    const bottoneForm=document.createElement('button');
    bottoneForm.innerText="Nascondi Form";
    bottoneForm.setAttribute("onclick", `nascondi("form${indice}","bottone${indice}")`);
    bottoneForm.setAttribute("id",`bottone${indice}`);
    nuovaDomanda.appendChild(bottoneForm);

    //creo il form di risposta
    const form=document.createElement('form');
    form.setAttribute("id",`form${indice}`);
    form.setAttribute("class","compari");

    //creo input nome utente
    const nomeUtente = document.createElement("input");
    nomeUtente.setAttribute("type", "text");
    nomeUtente.setAttribute("id", `nomeUtente${indice}`);
    nomeUtente.setAttribute("placeholder", "Nome utente");

    //creo input risposta
    const risposta = document.createElement("input");
    risposta.setAttribute("type", "text");
    risposta.setAttribute("id", `risposta${indice}`);
    risposta.setAttribute("class", "inputRisposta");
    risposta.setAttribute("placeholder", "Risposta");

    //creo bottone
    const div=document.createElement("div");
    const bottone=document.createElement("button");
    bottone.setAttribute("type","button");
    bottone.setAttribute("onclick", `aggiungiRisposta(${indice})`);
    bottone.innerText="Rispondi";
    div.appendChild(bottone);

    const bottoneRisposte=document.createElement('button');
    bottoneRisposte.innerText="Nascondi Risposte";
    bottoneRisposte.setAttribute("onclick", `nascondiRisposte("ul${indice}","bottoneRisposte${indice}")`);
    bottoneRisposte.setAttribute("id",`bottoneRisposte${indice}`);

    //creo la sezione dei commenti
    const sezioneCommenti=document.createElement("ul");
    sezioneCommenti.setAttribute("id",`ul${indice}`);
    sezioneCommenti.setAttribute('class','compari')

    form.appendChild(nomeUtente);
    form.appendChild(risposta);
    form.appendChild(div);

    const domande = document.getElementById('domande');
    nuovaDomanda.setAttribute('class', 'domanda');

    nuovaDomanda.appendChild(form);
    nuovaDomanda.appendChild(bottoneRisposte);
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
    nuovaRisposta.appendChild(creaSezione(`nomeUtente${parametro}`,'strong'));

    const d=new Date();
    const giorno=String(d.getDate()).padStart(2, '0');
    const mese = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const anno = d.getFullYear();
    const orario=`${d.getHours()}:${d.getMinutes()}`;
    const data=`${orario} del ${giorno}/${mese}/${anno}`;
    const sezioneData=document.createElement('p');
    sezioneData.innerText=data;
    sezioneData.setAttribute("class","data");
    nuovaRisposta.appendChild(sezioneData);
    
    nuovaRisposta.appendChild(creaSezione(`risposta${parametro}`,'p'));

    const risposte = document.getElementById(`ul${parametro}`);
    nuovaRisposta.setAttribute('class', `risposta`);
    nuovaRisposta.setAttribute('id', `risposta${parametro}`);

    risposte.appendChild(nuovaRisposta);
}

function nascondi(parametro, bottoneForm)
{
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

function nascondiRisposte(parametro, bottoneCommenti)
{
    const stato=document.getElementById(parametro);
    if(stato.getAttribute("class")=="scompari")
    {
        stato.setAttribute("class","comapri");
        const commenti=document.getElementById(bottoneCommenti).innerText="Nascondi Risposte";
    }
    else
    {
        stato.setAttribute("class","scompari");
        const commenti=document.getElementById(bottoneCommenti).innerText="Mostra Risposte";
    }
}