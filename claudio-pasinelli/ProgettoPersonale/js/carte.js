let id = 1;
let arrayCarte = [];

function creaCarta()
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
        const lista = document.getElementById("lista");

        if(arrayCarte.length==0)
        {
            lista.style.visibility = "visible";
        }

        const card = document.createElement("section");
        card.setAttribute("class","card");
        card.setAttribute("id","carta"+id);
        lista.appendChild(card);

        const title = document.createElement("section");
        title.setAttribute("class","title");
        card.appendChild(title);

        let mese = document.createElement("p");
        mese.innerText = document.getElementById("mese").value;
        title.appendChild(mese);

        let elimina = document.createElement("button");
        elimina.setAttribute("class","elimina");
        elimina.setAttribute("onclick","eliminaCarta("+id+")");
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
        musicTrack.innerText = "Titolo: " + document.getElementById("nome").value;
        footer.appendChild(musicTrack);

        let cost = document.createElement("p");
        cost.innerText = "Prezzo: " + document.getElementById("prezzo").value+"€";
        footer.appendChild(cost);

        arrayCarte.push(card);
        arrayCarte.push(document.getElementById("mese").value);
        arrayCarte.push(id);
        id++;

        sortListaCarte();
        coloraCarte();

        document.getElementById('nome').value = '';
        document.getElementById('prezzo').value = '';
        document.getElementById('mese').value = '0';
        document.getElementById('immagineCarta').value = '';
    }
}

function eliminaCarta(id)
{
    if(arrayCarte.includes(id))
    {
        const cartaDaEliminare = document.getElementById("carta"+id.toString());
        const indice = arrayCarte.indexOf(id);

        arrayCarte.splice(indice-2,3);
        cartaDaEliminare.remove();
    }
    else
        alert("La traccia \""+id+"\" non è stata trovata!");
}

function sortListaCarte()
{
    let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("lista");
    switching = true;

    while (switching)
    {
        switching = false;
        b = list.getElementsByClassName("card");
        for (i = 0; i < b.length; i++)
        {
            shouldSwitch = false;
            if(b[i]!=null)
            {
                //carta attuale
                let cartaAttuale;
                cartaAttuale = b[i];

                titoloAttuale = cartaAttuale.firstElementChild.textContent;

                let ultimaLettera = titoloAttuale.length
                let titoloCortoAttuale = titoloAttuale.substring(0, ultimaLettera - 1);
                let meseAttuale = numeroMese(titoloCortoAttuale);

                //carta successiva
                if(b[i+1]!=null)
                {
                    let cartaSuccessiva;
                    cartaSuccessiva = b[i+1];

                    titoloSuccessivo = cartaSuccessiva.firstElementChild.textContent;

                    let ultimaLettera = titoloSuccessivo.length
                    let titoloCortoSuccessivo = titoloSuccessivo.substring(0, ultimaLettera - 1);
                    let meseSuccessivo = numeroMese(titoloCortoSuccessivo);

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
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            switchcount ++;
        }
    }
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
    let carte = document.getElementsByClassName("card");
    let bianco = true;
    let titolo;

    for (let i = 0; i<carte.length; i++)
    {
        if(carte[i]!=null)
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