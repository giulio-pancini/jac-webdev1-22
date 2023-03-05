let idTraccia=1;
let arrayTracce=[];
//mesi array
let arrayMesi=[];
let arrayGennaio=[];
let arrayFebbario=[];
let arrayMarzo=[];
let arrayAprile=[];
let arrayMaggio=[];
let arrayGiugno=[];
let arrayLuglio=[];
let arrayAgosto=[];
let arraySettembre=[];
let arrayOttobre=[];
let arrayNovembre=[];
let arrayDicembre=[];
//mesi boolean
let gennaio=false;
let febbraio=false;
let marzo=false;
let aprile=false;
let maggio=false;
let giugno=false;
let luglio=false;
let agosto=false;
let settembre=false;
let ottobre=false;
let novembre=false;
let dicembre=false;
let meseUsato=0;

let nomeMese="";

function creaTraccia()
{
    if (document.getElementById("nome").value=="")
        alert("Non hai inserito il nome della traccia!");
    else if (document.getElementById("prezzo").value=="")
        alert("Non hai inserito il prezzo della traccia!");
    else if (isNaN(document.getElementById("prezzo").value))
    {
        alert("Il prezzo della traccia non è valido!");
        document.getElementById("prezzo").value = '';

    }
    else if (document.getElementById("mese").value=="0")
        alert("Hai dimenticato di indicare il mese!");
    else
    {
        document.getElementById("testoPerNoTracce").style.visibility = "hidden";
        document.getElementById("testoPerNoTracce").style.display = "none";

        if(document.getElementById("mese").value=="Gennaio")
        {
            meseUsato=1;
            if(!gennaio || arrayGennaio.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Gennaio";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayGennaio.push(sectionMese);
                gennaio=true;
            }
        }
        if(document.getElementById("mese").value=="Febbraio")
        {
            meseUsato=2;
            if(!febbraio || arrayFebbario.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Febbraio";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayFebbario.push(sectionMese);
                febbraio=true;
            }
        }
        if(document.getElementById("mese").value=="Marzo")
        {
            meseUsato=3;
            if(!marzo || arrayMarzo.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Marzo";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayMarzo.push(sectionMese);
                marzo=true;
            }
        }
        if(document.getElementById("mese").value=="Aprile")
        {
            meseUsato=4;
            if(!aprile || arrayAprile.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Aprile";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayAprile.push(sectionMese);
                aprile=true;
            }
        }
        if(document.getElementById("mese").value=="Maggio")
        {
            meseUsato=5;
            if(!maggio || arrayMaggio.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Maggio";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayMaggio.push(sectionMese);
                maggio=true;
            }
        }
        if(document.getElementById("mese").value=="Giugno")
        {
            meseUsato=6;
            if(!giugno || arrayGiugno.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Giugno";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayGiugno.push(sectionMese);
                giugno=true;
            }
        }
        if(document.getElementById("mese").value=="Luglio")
        {
            meseUsato=7;
            if(!luglio || arrayLuglio.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Luglio";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayLuglio.push(sectionMese);
                luglio=true;
            }
        }
        if(document.getElementById("mese").value=="Agosto")
        {
            meseUsato=8;
            if(!agosto || arrayAgosto.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Agosto";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayAgosto.push(sectionMese);
                agosto=true;
            }
        }
        if(document.getElementById("mese").value=="Settembre")
        {
            meseUsato=9;
            if(!settembre || arraySettembre.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Settembre";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arraySettembre.push(sectionMese);
                settembre=true;
            }
        }
        if(document.getElementById("mese").value=="Ottobre")
        {
            meseUsato=10;
            if(!ottobre || arrayOttobre.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Ottobre";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayOttobre.push(sectionMese);
                ottobre=true;
            }
        }
        if(document.getElementById("mese").value=="Novembre")
        {
            meseUsato=11;
            if(!novembre || arrayNovembre.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Novembre";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayNovembre.push(sectionMese);
                novembre=true;
            }
        }
        if(document.getElementById("mese").value=="Dicembre")
        {
            meseUsato=12;
            if(!dicembre || arrayDicembre.length==0)
            {
                //mese = ul
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "1";
                mese.style.paddingRight = "40px";
                mese.style.borderWidth = "0.2rem";
                mese.style.marginBottom = "0.5rem";
                //creazione della section
                const sectionMese = document.createElement("section");
                sectionMese.setAttribute('class','titoloESort');
                sectionMese.setAttribute('id','sezione'+meseUsato);
                mese.appendChild(sectionMese);
                //creazione del titolo
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Dicembre";
                nomeMese=document.getElementById("mese").value;
                titoloMese.setAttribute('id','titolo'+nomeMese);

                sectionMese.appendChild(titoloMese);

                //creazione del bottone
                const bottoneSortMese = document.createElement('button');
                bottoneSortMese.setAttribute('onclick','sortListDir('+meseUsato+')');
                bottoneSortMese.setAttribute('id','buttonSort'+meseUsato);
                bottoneSortMese.setAttribute('class','zoom');
                bottoneSortMese.setAttribute('title','Ordina le tracce');
                bottoneSortMese.innerText='Ordina';

                sectionMese.appendChild(bottoneSortMese);

                arrayDicembre.push(sectionMese);
                dicembre=true;
            }
        }

        //array di oggetti che compongono la traccia
        const oggetti = document.forms["traccia"].getElementsByTagName("input");

        const nuovaTraccia = document.createElement("li");
        nuovaTraccia.setAttribute('id','traccia'+idTraccia);
        nuovaTraccia.setAttribute('class','elementoTraccia zoom tip');

        const listaTracce = document.getElementById("lista"+meseUsato);
        listaTracce.appendChild(nuovaTraccia);
        
        const sectionTraccia = document.createElement("section");
        sectionTraccia.setAttribute('class','canzone');
        nuovaTraccia.appendChild(sectionTraccia);
        sectionTraccia.setAttribute('title','Titolo: '+document.getElementById("nome").value+'\nPrezzo: '+document.getElementById("prezzo").value+'€');

        for (let i = 0; i < oggetti.length; i++)
        {
            let valore = document.createElement("p");

            if(oggetti[i].id==="nome")
            {
                valore.innerText = oggetti[i].value;
                sectionTraccia.appendChild(valore);
            }
            else if(oggetti[i].id==="prezzo")
            {
                valore.innerText = oggetti[i].value+"€";
                valore.setAttribute("class","prezzo");
                sectionTraccia.appendChild(valore);
            }
        }
        //resetto il valore del contenuto del form dopo che è stato utilizzato per creare la traccia
        document.getElementById('nome').value = '';
        document.getElementById('prezzo').value = '';
        document.getElementById('mese').value = '0';

        //creo il bottone (la 'X') per eliminare la traccia
        const bottoneElimina = document.createElement("button");
        bottoneElimina.setAttribute('class','zoom');
        bottoneElimina.setAttribute('id','delTraccia');
        bottoneElimina.setAttribute('title','Elimina la traccia');
        bottoneElimina.setAttribute('onclick','eliminaTraccia('+idTraccia+')');
        bottoneElimina.innerText="X";
        sectionTraccia.appendChild(bottoneElimina);
        
        const contattoIntero = document.getElementById("traccia"+idTraccia.toString());

        if(meseUsato==1)
        {
            arrayGennaio.push(idTraccia);
            arrayMesi.push(arrayGennaio);
        }
        else if(meseUsato==2)
        {
            arrayFebbario.push(idTraccia);
            arrayMesi.push(arrayFebbario);

        }
        else if(meseUsato==3)
        {
            arrayMarzo.push(idTraccia);
            arrayMesi.push(arrayMarzo);

        }
        else if(meseUsato==4)
        {
            arrayAprile.push(idTraccia);
            arrayMesi.push(arrayAprile);

        }
        else if(meseUsato==5)
        {
            arrayMaggio.push(idTraccia);
            arrayMesi.push(arrayMaggio);

        }
        else if(meseUsato==6)
        {
            arrayGiugno.push(idTraccia);
            arrayMesi.push(arrayGiugno);

        }
        else if(meseUsato==7)
        {
            arrayLuglio.push(idTraccia);
            arrayMesi.push(arrayLuglio);

        }
        else if(meseUsato==8)
        {
            arrayAgosto.push(idTraccia);
            arrayMesi.push(arrayAgosto);

        }
        else if(meseUsato==9)
        {
            arraySettembre.push(idTraccia);
            arrayMesi.push(arraySettembre);

        }
        else if(meseUsato==10)
        {
            arrayOttobre.push(idTraccia);
            arrayMesi.push(arrayOttobre);

        }
        else if(meseUsato==11)
        {
            arrayNovembre.push(idTraccia);
            arrayMesi.push(arrayNovembre);

        }
        else if(meseUsato==12)
        {
            arrayDicembre.push(idTraccia);
            arrayMesi.push(arrayDicembre);

        }

        // switch(arrayMesi.length)
        // {
        //     case 1:
        //         {
        //             document.getElementById("listaTracce").style.gridTemplateColumns="repeat(1,1fr)";
        //             break;
        //         }
        //     case 2:
        //         {
        //             document.getElementById("listaTracce").style.gridTemplateColumns="repeat(2,1fr)";
        //             break;
        //         }
        //     case 3:
        //         {
        //             document.getElementById("listaTracce").style.gridTemplateColumns="repeat(3,1fr)";
        //             break;
        //         }
        // }

        //metto nell'arrayTracce l'id che poi incremento
        arrayTracce.push(idTraccia);

        idTraccia++;
    }
}
function eliminaTraccia(id)
{
    if(arrayTracce.includes(id))
    {
        const tracciaDaEliminare = document.getElementById("traccia"+id.toString());
        const indice = arrayTracce.indexOf(id);

        arrayTracce.splice(indice,1);
        tracciaDaEliminare.remove();

        if(arrayTracce.length==0)
        {
            document.getElementById("testoPerNoTracce").style.visibility = "visible";
            document.getElementById("testoPerNoTracce").style.display = "block";

            for(let i=0;i<12;i++)
            {
                meseUsato=i+1;
                const meseX = document.getElementById("lista"+meseUsato);
                meseX.style.opacity = "0";
                meseX.style.paddingRight = "0px";
                meseX.style.borderWidth = "0rem";
                meseX.style.marginBottom = "0rem";
            }
        }

        //gennaio
        if(arrayGennaio.length!=1 && arrayGennaio.includes(id))
        {
            const indice = arrayGennaio.indexOf(id);

            nomeMese="Gennaio";
            meseUsato=1;
            arrayGennaio.splice(indice,1);

            if(arrayGennaio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayGennaio.splice(0, arrayGennaio.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayGennaio);
            }
        }
        //febbraio
        else if(arrayFebbario.length!=1 && arrayFebbario.includes(id))
        {
            const indice = arrayFebbario.indexOf(id);

            nomeMese="Febbraio";
            meseUsato=2;
            arrayFebbario.splice(indice,1);

            if(arrayFebbario.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayFebbario.splice(0, arrayFebbario.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayFebbario);
            }
        }
        //marzo
        else if(arrayMarzo.length!=1 && arrayMarzo.includes(id))
        {
            const indice = arrayMarzo.indexOf(id);

            nomeMese="Marzo";
            meseUsato=3;
            arrayMarzo.splice(indice,1);

            if(arrayMarzo.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayMarzo.splice(0, arrayMarzo.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayMarzo);
            }
        }
        //aprile
        else if(arrayAprile.length!=1 && arrayAprile.includes(id))
        {
            const indice = arrayAprile.indexOf(id);

            nomeMese="Aprile";
            meseUsato=4;
            arrayAprile.splice(indice,1);

            if(arrayAprile.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayAprile.splice(0, arrayAprile.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayAprile);
            }
        }
        //maggio
        else if(arrayMaggio.length!=1 && arrayMaggio.includes(id))
        {
            const indice = arrayMaggio.indexOf(id);

            nomeMese="Maggio";
            meseUsato=5;
            arrayMaggio.splice(indice,1);

            if(arrayMaggio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayMaggio.splice(0, arrayMaggio.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayMaggio);
            }
        }
        //giugno
        else if(arrayGiugno.length!=1 && arrayGiugno.includes(id))
        {
            const indice = arrayGiugno.indexOf(id);

            nomeMese="Giugno";
            meseUsato=6;
            arrayGiugno.splice(indice,1);

            if(arrayGiugno.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayGiugno.splice(0, arrayGiugno.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayGiugno);
            }
        }
        //luglio
        else if(arrayLuglio.length!=1 && arrayLuglio.includes(id))
        {
            const indice = arrayLuglio.indexOf(id);

            nomeMese="Luglio";
            meseUsato=7;
            arrayLuglio.splice(indice,1);

            if(arrayLuglio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayLuglio.splice(0, arrayLuglio.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayLuglio);
            }
        }
        //agosto
        else if(arrayAgosto.length!=1 && arrayAgosto.includes(id))
        {
            const indice = arrayAgosto.indexOf(id);

            nomeMese="Agosto";
            meseUsato=8;
            arrayAgosto.splice(indice,1);

            if(arrayAgosto.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayAgosto.splice(0, arrayAgosto.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayAgosto);
            }
        }
        //settembre
        else if(arraySettembre.length!=1 && arraySettembre.includes(id))
        {
            const indice = arraySettembre.indexOf(id);

            nomeMese="Settembre";
            meseUsato=9;
            arraySettembre.splice(indice,1);

            if(arraySettembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arraySettembre.splice(0, arraySettembre.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arraySettembre);
            }
        }
        //ottobre
        else if(arrayOttobre.length!=1 && arrayOttobre.includes(id))
        {
            const indice = arrayOttobre.indexOf(id);

            nomeMese="Ottobre";
            meseUsato=10;
            arrayOttobre.splice(indice,1);

            if(arrayOttobre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayOttobre.splice(0, arrayOttobre.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayOttobre);
            }
        }
        //novembre
        else if(arrayNovembre.length!=1 && arrayNovembre.includes(id))
        {
            const indice = arrayNovembre.indexOf(id);

            nomeMese="Novembre";
            meseUsato=11;
            arrayNovembre.splice(indice,1);

            if(arrayNovembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayNovembre.splice(0, arrayNovembre.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayNovembre);
            }
        }
        //dicembre
        else if(arrayDicembre.length!=1 && arrayDicembre.includes(id))
        {
            const indice = arrayDicembre.indexOf(id);

            nomeMese="Dicembre";
            meseUsato=12;
            arrayDicembre.splice(indice,1);

            if(arrayDicembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo"+nomeMese);
                const bottoneDaEliminare = document.getElementById("buttonSort"+meseUsato);
                arrayDicembre.splice(0, arrayDicembre.length);
                const sectionDaEliminare = document.getElementsByClassName("titoloESort");
                
                for (const el of sectionDaEliminare)
                {
                    if(el.getAttribute('id')=="buttonSort"+meseUsato)
                        el.remove();
                }

                titoloDaEliminare.remove();
                bottoneDaEliminare.remove();
                
                const mese = document.getElementById("lista"+meseUsato);
                mese.style.opacity = "0";
                mese.style.paddingRight = "0px";
                mese.style.borderWidth = "0rem";
                mese.style.marginBottom = "0rem";
                arrayMesi.pop(arrayDicembre);
            }
            
        }
        // switch(arrayMesi.length)
        // {
        //     case 1:
        //         {
        //             document.getElementById("listaTracce").style.gridTemplateColumns="repeat(1,1fr)";
        //             break;
        //         }
        //     case 2:
        //         {
        //             document.getElementById("listaTracce").style.gridTemplateColumns="repeat(2,1fr)";
        //             break;
        //         }
        // }
    }
    else
        alert("La traccia \""+id+"\" non è stata trovata!");
}
function sortListDir(numeroLista)
{
    let list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    const bottoneSortMese=document.getElementById('buttonSort'+numeroLista);
    list = document.getElementById('lista'+numeroLista);
    switching = true;
    // imposto la direzione del sorting a ascendente
    dir = "asc"; 
    //faccio un loop che continuerà fino a quando il cambio d'ordine non sarà completato
    while (switching)
    {
        // parto dicendo che il cambio d'ordine non è completato
        switching = false;
        b = list.getElementsByTagName("li");
        // faccio il loop per tutti gli elementi
        for (i = 0; i < (b.length - 1); i++)
        {
            //parto dicendo che il cambio d'ordine non è completato
            shouldSwitch = false;
            /*controllo se il prossimo elemento debba essere rimpiazzato con quello attuale
            a seconda della direzione del sorting (ascendente asc o decrescente desc)*/
            if (dir == "asc")
            {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase())
                {
                    /*se il prossimo elemento è alfabeticamente inferiore di quello attuale,
                    si marchia come un cambio d'ordine e si rompre il ciclo*/
                    bottoneSortMese.setAttribute('title','Ordina le tracce crescente');
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "desc")
            {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase())
                {
                    /*se il prossimo elemento è alfabeticamente superiore di quello attuale,
                    si marchia come un cambio d'ordine e si rompre il ciclo*/
                    bottoneSortMese.setAttribute('title','Ordina le tracce decrescente');
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch)
        {
            /*se il cambio d'ordine è stato marchiato, lo si compie e si dice che è avvenuto*/
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            //ogni volta che un cambio d'ordine viene fatto, incremento lo switchcount di 1
            switchcount ++;
        }
        else
        {
            /*se il cambio d'ordine non è avvenuto e la direzione è "asc",
            la si cambia a "desc" e si ricomincia il ciclo*/
            if (switchcount == 0 && dir == "asc")
            {
                dir = "desc";
                switching = true;
            }
        }
    }
}