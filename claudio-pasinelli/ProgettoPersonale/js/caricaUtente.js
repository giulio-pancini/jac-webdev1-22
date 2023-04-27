async function caricaUtente()
{
    let userNickname = document.getElementById("userNickname");

    if(localStorage.getItem("idUser") != null)
    {
        const userSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/users/" + localStorage.getItem("idUser"));
        const userSpecificoJson = await userSpecifico.json();
        const nome = userSpecificoJson.nome;
        const cognome = userSpecificoJson.cognome;
        userNickname.innerText = nome + " " + cognome;

        const compositoreSpecifico = await fetch("http://localhost:8080/progettoPersonaleJava/api/v1/compositori/" + localStorage.getItem("idUser") + "/users");
        const compositoreSpecificoJson = await compositoreSpecifico.json();
        let idCompositore

        for(compositoreRisposta of compositoreSpecificoJson)
        {
            idCompositore = compositoreRisposta.idCompositore;
        }

        localStorage.setItem("idCompositore", idCompositore);

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
        
        return;
    }

    else if(localStorage.getItem("Nome") === null && localStorage.getItem("Cognome") === null)
    {
        userNickname.innerText = "Nome" + " " + "Cognome";
        return;
    }

    else
    {
        userNickname.innerText = localStorage.getItem("Nome") + " " + localStorage.getItem("Cognome");
        return;
    }
}