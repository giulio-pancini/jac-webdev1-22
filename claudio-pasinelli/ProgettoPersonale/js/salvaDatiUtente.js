class Compositore
{
    idCompositore
    idUser
    nomeArtista;
    descrizione;
    urlPic;

    constructor(idCompositore, idUser, nomeArtista, descrizione, urlPic)
    {
        this.idCompositore = idCompositore;
        this.idUser = idUser;
        this.nomeArtista = nomeArtista;
        this.descrizione = descrizione;
        this.urlPic = urlPic;
    }

    getIdCompositore()
    {
        return this.idCompositore;
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

    const bottoneSalva = document.getElementById("salvaDati");
    const bottoneNonSalvare = document.getElementById("nonSalvareDati");

    bottoneSalva.disabled = true;
    bottoneNonSalvare.disabled = true;

    const nomeArtista = document.getElementById("nomeArt").innerText;
    const descrizione = document.getElementById("testoDescrizione").innerText;
    const urlPic = document.getElementById("immagineProfilo").src;

    immagineGiaPresente = isImgSet();
    titoloGiaPresente = isNameSet();
    descrizioneGiaPresente = isTextSet();

    if(immagineGiaPresente && titoloGiaPresente && descrizioneGiaPresente && localStorage.getItem("idUser") != null)
    {
        const profiloAutore = new Compositore(parseInt(localStorage.getItem("idCompositore")), parseInt(localStorage.getItem("idUser")), nomeArtista, descrizione, urlPic);

        const body = JSON.stringify(profiloAutore);

        const getCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + profiloAutore.getIdUser() + "/users");
        const getCompositoreJson = await getCompositore.json();

        if(getCompositoreJson.length === 0)
        {
            const postCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + profiloAutore.getIdUser(),
            {
                method: "POST",
                headers:
                {
                    "content-type":'application/json'
                },
                body: body
            });
        }

        for(compositore of getCompositoreJson)
        {
            if(compositore.nomeArtista != nomeArtista || compositore.descrizione != descrizione || compositore.urlPic != urlPic)
            {
                const postCompositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idCompositore"),
                {
                    method: "PUT",
                    headers:
                    {
                        "content-type":'application/json'
                    },
                    body: body
                });
            }
        }
    }

    const getSocials = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + localStorage.getItem("idCompositore") + "/compositori");
    const getSocialsJson = await getSocials.json();

    salvaSocial(getSocialsJson);

    const getCarte = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + localStorage.getItem("idCompositore") + "/compositori");
    const getCarteJson = await getCarte.json();

    salvaCarta(getCarteJson);

    setTimeout(() =>
    {
        localStorage.clear();
        window.location.href = "index.html";
    }, 1000);
}

function nonSalvareDati()
{
    localStorage.clear();
    window.location.href = "index.html";
}