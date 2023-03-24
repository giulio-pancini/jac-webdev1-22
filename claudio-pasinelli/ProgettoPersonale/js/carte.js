let id = 1;
let arrayCarte = [];

function creaCartaJson()
{
    const input = document.getElementById("immagineCarta");
    const file = input.files[0];

    if (!file)
    {
        alert("Non hai inserito nessuna immagine!");
        document.getElementById('immagineCarta').value = '';
    }

    else if (document.getElementById("nome").value=="")
    {
        alert("Non hai inserito il nome della traccia!");
        document.getElementById('nome').value = '';
    }

    else if (document.getElementById("prezzo").value=="")
    {
        alert("Non hai inserito il prezzo della traccia!");
        document.getElementById('prezzo').value = '';
    }

    else if (isNaN(document.getElementById("prezzo").value))
    {
        alert("Il prezzo della traccia non è valido!");
        document.getElementById("prezzo").value = '';
    }

    else if (document.getElementById("mese").value=="0")
    {
        alert("Hai dimenticato di indicare il mese!");
        document.getElementById('mese').value = '0';
    }

    else
    {

        const imgBackground = document.createElement("section");
        imgBackground.setAttribute("class","imgBackground");
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            imgBackground.style.backgroundImage = "url("+reader.result+")";
        }
    
        imgBackground.style.backgroundImage = "url("+reader.result+")";

        carta=
        {
            titolo: document.getElementById("nome").value,
            prezzo: document.getElementById("prezzo").value,
            mese: document.getElementById("mese").value,
            id:id,
        }

        if(arrayCarte.length==0)
        {
            tracksContainer.style.display = "block";
        }

        arrayCarte.push(carta);
        creaCartaHTML(carta)
        id++    

        document.getElementById('nome').value = '';
        document.getElementById('prezzo').value = '';
        document.getElementById('mese').value = '0';
        document.getElementById('immagineCarta').value = '';

    }
    
    function creaCartaHTML(carta)
    {
        const input = document.getElementById("immagineCarta");
        const file = input.files[0];
    
        const imgBackground = document.createElement("section");
        imgBackground.setAttribute("class","imgBackground");
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            imgBackground.style.backgroundImage = "url("+reader.result+")";
        }
    
        imgBackground.style.backgroundImage = "url("+reader.result+")";

        const tracksContainer = document.getElementById("tracksContainer");
        const lista = document.getElementById("lista");
    
        const card = document.createElement("section");
        card.setAttribute("class","card");
        card.setAttribute("id","carta"+carta.id);
        lista.appendChild(card);
    
        const title = document.createElement("section");
        title.setAttribute("class","title");
        card.appendChild(title);
    
        let mese = document.createElement("p");
        mese.innerText = carta.mese;
        title.appendChild(mese);
    
        let elimina = document.createElement("button");
        elimina.setAttribute("class","elimina");
        elimina.setAttribute("onclick","eliminaCarta("+carta.id+")");
        elimina.innerText = "X";
        title.appendChild(elimina);
    
        const imgContainer = document.createElement("section");
        imgContainer.setAttribute("class","img-container");
        card.appendChild(imgContainer);
    
        const banner = document.createElement("section");
        banner.setAttribute("class","banner");
        imgContainer.appendChild(banner);
        banner.appendChild(imgBackground);
    
        const description = document.createElement("description");
        description.setAttribute("class","description");
        card.appendChild(description);
    
        let footer = document.createElement("footer");
        description.appendChild(footer);
    
        let musicTrack = document.createElement("p");
        musicTrack.innerText = "Titolo: " + carta.titolo;
        footer.appendChild(musicTrack);
    
        let cost = document.createElement("p");
        cost.innerText = `Prezzo: ${carta.prezzo}€`;
        cost.setAttribute("id","prezzo"+id);
        footer.appendChild(cost);

        card.setAttribute("data-tooltip",`${carta.titolo} ${carta.prezzo}€ | ${carta.mese}`);
        document.getElementById('meseSort').value = '0';

        sortMeseScelto();

        const incasso = document.getElementById("incasso").innerText = incassoTotale();

        sortListaCarte();
        coloraCarte();
    }
}

function eliminaCarta(id)
{
    let isCartaTrovata = false;

    for (const carta of arrayCarte)
    {
        if(carta.id==id)
        {
            const cartaDaEliminare = document.getElementById("carta"+id.toString());
            const indice = arrayCarte.indexOf(carta);
    
            arrayCarte.splice(carta,1);
            cartaDaEliminare.remove();
            coloraCarte();
            isCartaTrovata = true;

            if(arrayCarte.length==0)
            {
                tracksContainer.style.display = "none";
            }
        }
    }

    if(!isCartaTrovata)
        alert(`La traccia "${id}" non è stata trovata!`)
}

function sortListaCarte()
{
    let list, i, switching, shouldSwitch;
    const listaCarte = document.getElementsByClassName("card");
    switching = true;

    while (switching)
    {
        switching = false;
        for (i = 0; i < listaCarte.length; i++)
        {
            shouldSwitch = false;
            if(listaCarte[i]!=null)
            {
                //carta attuale
                meseTestoAttuale = meseCarta(listaCarte[i]);

                let meseAttuale = numeroMese(meseTestoAttuale);

                //carta successiva
                if(listaCarte[i+1]!=null)
                {
                    meseTestoSuccessivo = meseCarta(listaCarte[i+1]);

                    let meseSuccessivo = numeroMese(meseTestoSuccessivo);

                    if (meseAttuale > meseSuccessivo)
                    {
                        shouldSwitch = true;
                        break;
                    }
                }
                else
                {
                    shouldSwitch = false;
                    break;
                }
            }
        }
        if (shouldSwitch)
        {
            listaCarte[i].parentNode.insertBefore(listaCarte[i + 1], listaCarte[i]);
            switching = true;
        }
    }
}

function meseCarta(carta)
{
    titolo = carta.firstElementChild.textContent;
    return titoloCorto = titolo.substring(0, titolo.length - 1);
}

function numeroMese(mese)
{
    if(mese==="Gennaio")
        return 1;
    else if(mese==="Febbraio")
        return 2;
        if(mese==="Marzo")
        return 3;
    else if(mese==="Aprile")
        return 4;
        if(mese==="Maggio")
        return 5;
    else if(mese==="Giugno")
        return 6;
        if(mese==="Luglio")
        return 7;
    else if(mese==="Agosto")
        return 8;
        if(mese==="Settembre")
        return 9;
    else if(mese==="Ottobre")
        return 10;
        if(mese==="Novembre")
        return 11;
    else if(mese==="Dicembre")
        return 12;
}

function coloraCarte()
{
    const carte = document.getElementsByClassName("card");
    let bianco = true;
    let titolo;

    for (let i = 0; i<carte.length; i++)
    {
        if(carte[i]!=null && carte[i].style == "flex")
        {
            if(bianco)
            {
                titolo = carte[i].firstElementChild;
                titolo.style.backgroundColor = "rgb(255, 255, 255)";
                carte[i].style.backgroundColor = "rgb(255, 255, 255)";
                carte[i].style.color = "rgb(0, 0, 0)";
                bianco = false;
            }
            else
            {
                titolo = carte[i].firstElementChild;
                titolo.style.backgroundColor = "rgb(68, 72, 87)";
                carte[i].style.backgroundColor = "rgb(68, 72, 87)";
                carte[i].style.color = "rgb(255, 255, 255)";
                bianco = true;
            }
        }
    }
}

function incassoTotale()
{
    const carte = document.getElementsByClassName("card");
    let incassoTotale = 0;
    let incassoTesto = "";
    
    for(let i = 0; i<carte.length; i++)
    {
        const figliCarta = carte[i].childNodes;
        const description = figliCarta[2];
        const footer = description.children[0];
        const prezzoCartaLungo = footer.children[1].innerText;
        const prezzoCarta = parseFloat(prezzoCartaLungo.substring(8,prezzoCartaLungo.length));

        if(carte[i].style.display == "flex")
        {
            const incassoCarta = prezzoCarta;
            incassoTotale += incassoCarta;
        }
    }

    if(incassoTotale != 0 && !isNaN(incassoTotale))
    {
        return incassoTesto = `Incasso totale: ${incassoTotale}€`;
    }

    else
    {
        return incassoTesto = `Incasso totale: 0€`;
    }
}

function sortMeseScelto()
{
    const meseScelto = document.getElementById("meseSort").value;
    const lista = document.getElementsByClassName("card");

    for(let i = 0; i<lista.length; i++)
    {
        if(meseCarta(lista[i]) === meseScelto || meseScelto === "0")
        {
            lista[i].style.display = "flex";
        }

        else
        {
            lista[i].style.display = "none";
        }
    }

    const incasso = document.getElementById("incasso").innerText = incassoTotale();
}