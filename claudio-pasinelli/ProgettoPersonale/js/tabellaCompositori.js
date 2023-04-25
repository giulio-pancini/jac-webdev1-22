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

async function creaProfilo(profiloAutore)
{
    const nomeArtista = profiloAutore.getNomeArtista();
    const descrizione = profiloAutore.getDescrizione();
    const urlPic = profiloAutore.getUrlPic();
    const idUser = profiloAutore.getIdUser();

    const listaCompositori = document.getElementById("listaCompositori");

    const profilo = document.createElement("section");
    profilo.setAttribute("id", "profilo");

    const sectionImmagineProfilo = document.createElement("section");
    sectionImmagineProfilo.setAttribute("id", "sectionImmagineProfilo");

    const immagineProfilo = document.createElement("img");
    immagineProfilo.setAttribute("id", "immagineProfilo");
    immagineProfilo.setAttribute("src", urlPic);

    sectionImmagineProfilo.appendChild(immagineProfilo);

    const sectionDescrizioneProfilo = document.createElement("section");
    sectionDescrizioneProfilo.setAttribute("id", "profiloDescrizione");

    const nomeArt = document.createElement("h1");
    nomeArt.setAttribute("id", "nomeArt");
    nomeArt.innerText = nomeArtista;

    const descrizioneProfilo = document.createElement("p");
    descrizioneProfilo.setAttribute("id", "testoDescrizione");
    descrizioneProfilo.innerText = descrizione;

    const buttonVisita = document.createElement("button");
    buttonVisita.setAttribute("id", "buttonVisita" + idUser);
    buttonVisita.setAttribute("class","buttonVisitaProfilo");
    buttonVisita.setAttribute("onclick","visitaProfilo("+idUser+")");
    buttonVisita.innerText = "Visita " + nomeArtista + "";

    sectionDescrizioneProfilo.appendChild(nomeArt);
    sectionDescrizioneProfilo.appendChild(descrizioneProfilo);

    profilo.appendChild(sectionImmagineProfilo);
    profilo.appendChild(sectionDescrizioneProfilo);
    profilo.appendChild(buttonVisita);
    profilo.style.display = "grid";

    listaCompositori.appendChild(profilo);
}

async function creaTabellaCompositori()
{
    const compositori = await fetch("http://localhost:8080/progettoPersonale/api/v1/compositori/");
    const responseJson = await compositori.json();

    for(let i = 0; i < responseJson.length; i++)
    {
        const profiloAutore = new Compositore(responseJson[i].idCompositore, responseJson[i].idUser, responseJson[i].nomeArtista, responseJson[i].descrizione, responseJson[i].urlPic)
        creaProfilo(profiloAutore);
    }
}

async function visitaProfilo(idUser)
{
    localStorage.clear();
    const userSpecifico = await fetch("http://localhost:8080/progettoPersonale/api/v1/users/" + idUser.toString());

    const userSpecificoJson = await userSpecifico.json();
    const nome = userSpecificoJson.nome;
    const cognome = userSpecificoJson.cognome;
    localStorage.setItem("Nome", nome);
    localStorage.setItem("Cognome", nome);
    localStorage.setItem("idUser", idUser);

    window.location.href = "editorCompositori.html";
}