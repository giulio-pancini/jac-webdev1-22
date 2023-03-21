function creaProfilo()
{
    let immagineGiaPresente = false;
    let titoloGiaPresente = false;
    let descrizioneGiaPresente = false;
    const nomeArtista = document.getElementById("nomeArtista");
    const testo = document.getElementById("descrizione");
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];
    
    const contenutoImg = document.getElementById("immagineProfilo").src;
    const testoNomeArtista = document.getElementById("nomeArt");
    const testoDescrizione = document.getElementById("testoDescrizione");
    const immagine = document.getElementById("immagineProfilo");

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

    /*controlli:
    la foto dell'artista c'è già?
    il nome dell'artista c'è già?
    la descrizione dell'artista c'è già?
    */

    if (!file && contenutoImg !== "")
    {
        immagineGiaPresente = true;
    }

    if (nomeArtista.value === "" && document.getElementById("nomeArt").innerText !== "")
    {
        titoloGiaPresente = true;
    }

    if (testo.value === "" && document.getElementById("testoDescrizione").innerText !== "")
    {
        descrizioneGiaPresente = true;
    }

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

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display = "none";

    nomeArtista.value = "";
    testo.value = "";
    input.value = "";

    testo.style.height = "59px";
}

function modificaProfilo()
{
    const profilo = document.getElementById("profilo");
    profilo.style.display = "none";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display="flex";
}