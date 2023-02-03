let idTraccia=1;
let arrayTracce=[];
//mesi array
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

function creaTraccia()
{
    let mese=0;
    if (document.getElementById("nome").value=="")
        alert("Non hai compilato tutte le caselle!");
    else if (document.getElementById("mese").value=="0")
        alert("Hai dimenticato di indicare il mese!");
    else
    {
        if(document.getElementById("mese").value=="gennaio")
        {
            meseUsato=1;
            if(!gennaio || arrayGennaio.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Gennaio";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayGennaio.push(titoloMese);
                gennaio=true;
            }
        }
        if(document.getElementById("mese").value=="febbraio")
        {
            meseUsato=2;
            if(!febbraio || arrayFebbario.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Febbraio";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayFebbario.push(titoloMese);
                febbraio=true;
            }
        }
        if(document.getElementById("mese").value=="marzo")
        {
            meseUsato=3;
            if(!marzo || arrayMarzo.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Marzo";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayMarzo.push(titoloMese);
                marzo=true;
            }
        }
        if(document.getElementById("mese").value=="aprile")
        {
            meseUsato=4;
            if(!aprile || arrayAprile.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Aprile";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayAprile.push(titoloMese);
                aprile=true;
            }
        }
        if(document.getElementById("mese").value=="maggio")
        {
            meseUsato=5;
            if(!maggio || arrayMaggio.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Maggio";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayMaggio.push(titoloMese);
                maggio=true;
            }
        }
        if(document.getElementById("mese").value=="giugno")
        {
            meseUsato=6;
            if(!giugno || arrayGiugno.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Giugno";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayGiugno.push(titoloMese);
                giugno=true;
            }
        }
        if(document.getElementById("mese").value=="luglio")
        {
            meseUsato=7;
            if(!luglio || arrayLuglio.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Luglio";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayLuglio.push(titoloMese);
                luglio=true;
            }
        }
        if(document.getElementById("mese").value=="agosto")
        {
            meseUsato=8;
            if(!agosto || arrayAgosto.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Agosto";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayAgosto.push(titoloMese);
                agosto=true;
            }
        }
        if(document.getElementById("mese").value=="settembre")
        {
            meseUsato=9;
            if(!settembre || arraySettembre.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Settembre";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arraySettembre.push(titoloMese);
                settembre=true;
            }
        }
        if(document.getElementById("mese").value=="ottobre")
        {
            meseUsato=10;
            if(!ottobre || arrayOttobre.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Ottobre";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayOttobre.push(titoloMese);
                ottobre=true;
            }
        }
        if(document.getElementById("mese").value=="novembre")
        {
            meseUsato=11;
            if(!novembre || arrayNovembre.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Novembre";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayNovembre.push(titoloMese);
                novembre=true;
            }
        }
        if(document.getElementById("mese").value=="dicembre")
        {
            meseUsato=12;
            if(!dicembre || arrayDicembre.length==0)
            {
                mese = document.getElementById("lista"+meseUsato);
                const titoloMese = document.createElement("h1");
                titoloMese.innerText="Dicembre";
                titoloMese.setAttribute('id','titolo'+meseUsato);
                mese.appendChild(titoloMese);
                arrayDicembre.push(titoloMese);
                dicembre=true;
            }
        }

        //array di oggetti che compongono la traccia
        const oggetti = document.forms["traccia"].getElementsByTagName("input");

        const nuovaTraccia = document.createElement("li");
        nuovaTraccia.setAttribute('id','traccia'+idTraccia);
        const listaTracce = document.getElementById("lista"+meseUsato);
        listaTracce.appendChild(nuovaTraccia);

        const sectionTraccia = document.createElement("section");
        sectionTraccia.setAttribute('class','canzone');
        nuovaTraccia.appendChild(sectionTraccia);

        for (let i = 0; i < oggetti.length; i++)
        {
            let valore = document.createElement("p");

            if(oggetti[i].id==="nome")
            {
                valore.innerText = oggetti[i].value;
                sectionTraccia.appendChild(valore);
            }
        }
        //resetto il valore del contenuto del form dopo che è stato utilizzato per creare la traccia
        document.getElementById('nome').value = '';
        document.getElementById('mese').value = '0';

        //creo il bottone (la 'X') per eliminare la traccia
        const bottoneElimina = document.createElement("button");
        bottoneElimina.setAttribute('class','zoom');
        bottoneElimina.setAttribute('id','delTraccia');
        bottoneElimina.setAttribute('onclick','eliminaTraccia('+idTraccia+')');
        bottoneElimina.innerText="X";
        sectionTraccia.appendChild(bottoneElimina);
        
        const contattoIntero = document.getElementById("traccia"+idTraccia.toString());

        if(meseUsato==1)
            arrayGennaio.push(idTraccia);
        else if(meseUsato==2)
            arrayFebbario.push(idTraccia);
        else if(meseUsato==3)
            arrayMarzo.push(idTraccia);
        else if(meseUsato==4)
            arrayAprile.push(idTraccia);
        else if(meseUsato==5)
            arrayMaggio.push(idTraccia);
        else if(meseUsato==6)
            arrayGiugno.push(idTraccia);
        else if(meseUsato==7)
            arrayLuglio.push(idTraccia);
        else if(meseUsato==8)
            arrayAgosto.push(idTraccia);
        else if(meseUsato==9)
            arraySettembre.push(idTraccia);
        else if(meseUsato==10)
            arrayOttobre.push(idTraccia);
        else if(meseUsato==11)
            arrayNovembre.push(idTraccia);
        else if(meseUsato==12)
            arrayDicembre.push(idTraccia);

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

        if(arrayGennaio.length!=1 && arrayGennaio.includes(id))
        {
            const indice = arrayGennaio.indexOf(id);

            arrayGennaio.splice(indice,1);

            if(arrayGennaio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo1");
                arrayGennaio.splice(0, arrayGennaio.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayFebbario.length!=1 && arrayFebbario.includes(id))
        {
            const indice = arrayFebbario.indexOf(id);

            arrayFebbario.splice(indice,1);

            if(arrayFebbario.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo2");
                arrayFebbario.splice(0, arrayFebbario.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayMarzo.length!=1 && arrayMarzo.includes(id))
        {
            const indice = arrayMarzo.indexOf(id);

            arrayMarzo.splice(indice,1);

            if(arrayMarzo.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo3");
                arrayMarzo.splice(0, arrayMarzo.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayAprile.length!=1 && arrayAprile.includes(id))
        {
            const indice = arrayAprile.indexOf(id);

            arrayAprile.splice(indice,1);

            if(arrayAprile.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo4");
                arrayAprile.splice(0, arrayAprile.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayMaggio.length!=1 && arrayMaggio.includes(id))
        {
            const indice = arrayMaggio.indexOf(id);

            arrayMaggio.splice(indice,1);

            if(arrayMaggio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo5");
                arrayMaggio.splice(0, arrayMaggio.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayGiugno.length!=1 && arrayGiugno.includes(id))
        {
            const indice = arrayGiugno.indexOf(id);

            arrayGiugno.splice(indice,1);

            if(arrayGiugno.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo6");
                arrayGiugno.splice(0, arrayGiugno.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayLuglio.length!=1 && arrayLuglio.includes(id))
        {
            const indice = arrayLuglio.indexOf(id);

            arrayLuglio.splice(indice,1);

            if(arrayLuglio.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo7");
                arrayLuglio.splice(0, arrayLuglio.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayAgosto.length!=1 && arrayAgosto.includes(id))
        {
            const indice = arrayAgosto.indexOf(id);

            arrayAgosto.splice(indice,1);

            if(arrayAgosto.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo8");
                arrayAgosto.splice(0, arrayAgosto.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arraySettembre.length!=1 && arraySettembre.includes(id))
        {
            const indice = arraySettembre.indexOf(id);

            arraySettembre.splice(indice,1);

            if(arraySettembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo9");
                arraySettembre.splice(0, arraySettembre.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayOttobre.length!=1 && arrayOttobre.includes(id))
        {
            const indice = arrayOttobre.indexOf(id);

            arrayOttobre.splice(indice,1);

            if(arrayOttobre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo10");
                arrayOttobre.splice(0, arrayOttobre.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayNovembre.length!=1 && arrayNovembre.includes(id))
        {
            const indice = arrayNovembre.indexOf(id);

            arrayNovembre.splice(indice,1);

            if(arrayNovembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo11");
                arrayNovembre.splice(0, arrayNovembre.length)
                titoloDaEliminare.remove();
            }
        }
        else if(arrayDicembre.length!=1 && arrayDicembre.includes(id))
        {
            const indice = arrayDicembre.indexOf(id);

            arrayDicembre.splice(indice,1);

            if(arrayDicembre.length==1)
            {
                const titoloDaEliminare = document.getElementById("titolo12");
                arrayDicembre.splice(0, arrayDicembre.length)
                titoloDaEliminare.remove();
            }
        }
    }
    else
        alert("La traccia \""+id+"\" non è stata trovata!");
}