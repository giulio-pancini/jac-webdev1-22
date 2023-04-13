let profiloAutore;

function creaProfilo()
{
    let immagineGiaPresente;             //bolean
    let titoloGiaPresente;               //bolean
    let descrizioneGiaPresente;          //bolean

    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    
    const contenutoImg = document.getElementById("immagineProfilo").src;
    const testoNomeArtista = document.getElementById("nomeArt");
    const testoDescrizione = document.getElementById("testoDescrizione");
    const immagine = document.getElementById("immagineProfilo");

    /*controlli:
    la foto dell'artista c'è già?
    il nome dell'artista c'è già?
    la descrizione dell'artista c'è già?
    */

    if (!file && contenutoImg === "")
    {
        alert("Non hai inserito nessuna immagine!");
        return;
    }

    if(nomeArtista.value === "" && document.getElementById("nomeArt").innerText === "")
    {
        alert("Non hai inserito tuo nome!");
        return;
    }

    if(testo.value === "" && document.getElementById("testoDescrizione").innerText === "")
    {
        alert("Non hai inserito nessuna descrizione!");
        return;
    }

    immagineGiaPresente = isImgSet();
    titoloGiaPresente = isNameSet();
    descrizioneGiaPresente = isTextSet();

    if(!immagineGiaPresente)
    {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function()
        {
            // const image = reader.result;
            immagine.src=reader.result;
        }
    }

    if(!titoloGiaPresente)
    {
        testoNomeArtista.innerText = nomeArtista.value;
    }

    if(!descrizioneGiaPresente)
    {
        testoDescrizione.innerText = testo.value;
    }

    profiloAutore = 
    {
        nickname: testoNomeArtista.innerText,
        description: testoDescrizione.innerText,
        profilePic: immagine.innerText
    }

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";

    testo.style.height = "59px";
}

function isImgSet()
{
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    const contenutoImg = document.getElementById("immagineProfilo").src;

    if (!file && contenutoImg !== "")
    {
        return true;
    }
    
    return false;
}

function isNameSet()
{
    const nomeArtista = document.getElementById("nomeArtista");

    if (nomeArtista.value === "" && document.getElementById("nomeArt").innerText !== "")
    {
        return true;
    }

    return false;
}

function isTextSet()
{
    const testo = document.getElementById("descrizione");

    if (testo.value === "" && document.getElementById("testoDescrizione").innerText !== "")
    {
        return true;
    }
    
    return false;
}

function modificaProfilo()
{
    const profilo = document.getElementById("profilo");
    profilo.style.display = "none";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display="flex";
}

function annullaModificaProfilo()
{
    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";
}