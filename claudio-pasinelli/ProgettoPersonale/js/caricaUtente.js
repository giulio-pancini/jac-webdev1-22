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

    if(localStorage.getItem("Nome") === null || localStorage.getItem("Cognome") === null)
    {
        userNickname.innerText = "Nome" + " " + "Cognome";
    }

    else if(localStorage.getItem("Nome") != "undefined" || localStorage.getItem("Cognome") != "undefined")
    {
        userNickname.innerText = "Nome" + " " + "Cognome";
    }

    if(localStorage.getItem("idUser") != "undefined")
    {
        const userSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/" + localStorage.getItem("idUser"));
        const userSpecificoJson = await userSpecifico.json();
        const nome = userSpecificoJson.nome;
        const cognome = userSpecificoJson.cognome;
        userNickname.innerText = nome + " " + cognome;

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
    
            //creo il profilo del compositore
            const compositore = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + idCompositore);
            const compositoreJson = await compositore.json();
    
            const profiloAutore = new Compositore(compositoreJson.idCompositore, compositoreJson.idUser, compositoreJson.nomeArtista, compositoreJson.descrizione, compositoreJson.urlPic);
            creaProfiloFromCompositore(profiloAutore);
    
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
            return;
        }
    }
}