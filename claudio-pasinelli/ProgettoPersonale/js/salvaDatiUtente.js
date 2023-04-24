class Compositore
{
    idUser
    nomeArtista;
    descrizione;
    urlPic;

    constructor(idUser, nomeArtista, descrizione, urlPic)
    {
        this.idUser = idUser;
        this.nomeArtista = nomeArtista;
        this.descrizione = descrizione;
        this.urlPic = urlPic;
    }

    getIdUser()
    {
        return this.idUser;
    }

    getNomeArtista()
    {
        return this.nomeArtista;
    }

    getDescrizione()
    {
        return this.descrizione;
    }

    getUrlPic()
    {
        return this.urlPic;
    }
}

async function salvaDati()
{
    let immagineGiaPresente;             //bolean
    let titoloGiaPresente;               //bolean
    let descrizioneGiaPresente;          //bolean

    const nomeArtista = document.getElementById("nomeArt").innerText;
    const descrizione = document.getElementById("testoDescrizione").innerText;
    const urlPic = document.getElementById("immagineProfilo").src;

    immagineGiaPresente = isImgSet();
    titoloGiaPresente = isNameSet();
    descrizioneGiaPresente = isTextSet();

    if(immagineGiaPresente && titoloGiaPresente && descrizioneGiaPresente && localStorage.getItem("idUser") != null)
    {
        const profiloAutore = new Compositore(parseInt(localStorage.getItem("idUser")), nomeArtista, descrizione, urlPic);

        const body = JSON.stringify(profiloAutore);

        const postCompositore = await fetch("http://localhost:8080/progettoPersonale/api/v1/compositori/" + profiloAutore.getIdUser(),
        {
            method: "POST",
            headers:
            {
                "content-type":'application/json'
            },
            body: body
        });
    }
    localStorage.clear();
    window.location.href = "index.html";
}

function nonSalvareDati()
{
    localStorage.clear();
    window.location.href = "index.html";
}