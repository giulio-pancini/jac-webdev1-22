function creaProfilo()
{
    const testo = document.getElementById("descrizione");

    if(testo.value==="")
    {
        alert("Non hai inserito nessuna immagine!");
        return;
    }

    const immagine = document.getElementById("immagineProfilo");
    const input = document.getElementById("imageProfileInput");
    const file = input.files[0];

    if (!file)
    {
        alert("Non hai inserito nessuna immagine!");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function()

    {
        // const image = reader.result;
        immagine.src=reader.result;
    }

    const testoP = document.getElementById("testoDescrizione");
    testoP.innerText = testo.value;

    const profilo = document.getElementById("profilo");
    profilo.style.display = "grid";

    const formProfilo = document.getElementById("formProfilo");
    formProfilo.style.display="none";

    testo.value = "";
    input.value = "";
}