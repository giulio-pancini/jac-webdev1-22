let idCompositore;

async function impostaIdCompositore()
{
    const compositoreSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idUser") + "/users");
    const compositoreSpecificoJson = await compositoreSpecifico.json();

    if(compositoreSpecificoJson.length === 0)
    {
        const getCompositori = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/");
        const getCompositoriJson = await getCompositori.json();
            
        let maxId = 1;

        for(compositore of getCompositoriJson)
        {
            if(compositore.idCompositore > maxId)
            {
                maxId = compositore.idCompositore;
            }
        }

        localStorage.setItem("idCompositore", maxId + 1);
        return true;
    }

    else
    {
        for(compositoreRisposta of compositoreSpecificoJson)
        {
            idCompositore = compositoreRisposta.idCompositore;
        }

        localStorage.setItem("idCompositore", idCompositore);
        return true;
    }
}

async function caricaUtente()
{
    let userNickname = document.getElementById("userNickname");

    if(localStorage.getItem("Nome") === null || localStorage.getItem("Cognome") === null && localStorage.getItem("NomeUser") === null && localStorage.getItem("CognomeUser") === null)
    {
        userNickname.innerText = "Impossibile caricare il nome dell'utente";
    }

    else if(localStorage.getItem("Nome") != "undefined" || localStorage.getItem("Cognome") != "undefined" && localStorage.getItem("NomeUser") != "undefined" && localStorage.getItem("CognomeUser") != "undefined")
    {
        userNickname.innerText = "Impossibile caricare il nome dell'utente";
    }

    if(!(localStorage.getItem("NomeUser") != "undefined" && localStorage.getItem("CognomeUser") != "undefined"))
    {
        const userSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/" + localStorage.getItem("idUser"));
        const userSpecificoJson = await userSpecifico.json();
        const nome = userSpecificoJson.nome;
        const cognome = userSpecificoJson.cognome;
        userNickname.innerText = nome + " " + cognome;
    }

    else
    {
        const nome = localStorage.getItem("NomeUser");
        const cognome = localStorage.getItem("CognomeUser");
        userNickname.innerText = nome + " " + cognome;
    }

    compositoreSpecifico();
}

async function compositoreSpecifico()
{
    let compositoreByIdUserSpecifico;
    let compositoreByIdUserSpecificoJson

    try
    {
        compositoreByIdUserSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idUser") + "/users");
        compositoreByIdUserSpecificoJson = await compositoreByIdUserSpecifico.json();
    }
    catch(err)
    {
        console.log(err.message);
    }

    if(compositoreByIdUserSpecifico.status === 404 || compositoreByIdUserSpecifico === null)
    {
        //il compositore ha l'account ma non ha un profilo (ha fatto da poco il login, quindi ha appena creato il suo account)
    }

    let risultato = false;
    risultato = await impostaIdCompositore();

    if(risultato === true)
    {
        idCompositore = localStorage.getItem("idCompositore");

        caricaTuttiIDati();

        return;
    }
}

async function caricaTuttiIDati()
{
    let risultatoCaricamentoProfilo = false;
    let risultatoCaricamentoFoto = false;
    let risultatoCaricamentoCarte = false;
    let risultatoCaricamentoSocial = false;

    risultatoCaricamentoProfilo = await caricaDatiProfilo();
    risultatoCaricamentoFoto = await caricaDatiFoto();
    risultatoCaricamentoCarte = await caricaDatiCarte();
    risultatoCaricamentoSocial = await caricaDatiSocial();

    if(risultatoCaricamentoProfilo && risultatoCaricamentoFoto && risultatoCaricamentoCarte && risultatoCaricamentoSocial)
    {
        setTimeout(() =>
        {
            localStorage.clear();
            window.location.href = "index.html";
        }, 1000);
    }
}

async function caricaDatiProfilo()
{
    try
    {
        //creo il profilo del compositore
        const compositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + idCompositore);
        const compositoreJson = await compositore.json();
        
        const profiloAutore = new Compositore(compositoreJson.idCompositore, compositoreJson.idUser, compositoreJson.nomeArtista, compositoreJson.descrizione, compositoreJson.urlPic);
        creaProfiloFromCompositore(profiloAutore);
    }
    catch(err)
    {
        console.error(err.message);
    }
}

async function caricaDatiFoto()
{
    try
    {
        //carico le foto e le creo
        const getFoto = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/foto/" + idCompositore + "/compositori");
        const getFotoJson = await getFoto.json();
    
        for(fotoCompositore of getFotoJson)
        {
            const idFoto = fotoCompositore.idFoto;
            const idCompositore = fotoCompositore.idCompositore;
            const urlFoto = fotoCompositore.urlFoto;
            const eliminata = fotoCompositore.eliminata;
    
            const foto = new Foto(idFoto, idCompositore, urlFoto, eliminata);
            addImageObj(foto);
        }
    
        trovaMaxIdFoto();
        return true;
    }
    catch(err)
    {
        console.error(err.message);
    }
}

async function caricaDatiCarte()
{
    try
    {
        //carico le carte e le creo
        const getCarte = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/carte/" + idCompositore + "/compositori");
        const getCarteJson = await getCarte.json();
    
        for(cartaCompositore of getCarteJson)
        {
            const idCarta = cartaCompositore.idCarta;
            const idCompositore = cartaCompositore.idCompositore;
            const titolo = cartaCompositore.titolo;
            const prezzo = cartaCompositore.prezzo;
            const mese = cartaCompositore.mese;
            const img = cartaCompositore.img;
            const eliminata = cartaCompositore.eliminata;
    
            const carta = new Carta(idCarta, idCompositore, titolo, prezzo, mese, img, eliminata);
            creaCartaHTML(carta);
        }
    
        trovaMaxIdCarta();
        return true;
    }
    catch(err)
    {
        console.error(err.message);
    }
}

async function caricaDatiSocial()
{
    try
    {
        //carico i social e li creo
        const getSocials = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/socials/" + idCompositore + "/compositori");
        const getSocialsJson = await getSocials.json();
    
        for(socialCompositore of getSocialsJson)
        {
            const idSocial = socialCompositore.idSocial;
            const idCompositore = socialCompositore.idCompositore;
            const dataTooltip = socialCompositore.dataTooltip;
            const img = socialCompositore.img;
            const link = socialCompositore.link;
            const media = socialCompositore.media;
    
            const social = new Social(idSocial, idCompositore, dataTooltip, media, link, img);
    
            creaSocial(social);
        }
    
        trovaMaxIdSocial();
        return true;
    }
    catch(err)
    {
        console.error(err.message);
    }
}