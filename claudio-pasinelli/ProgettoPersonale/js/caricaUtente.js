async function caricaUtente()
{
    let userNickname = document.getElementById("userNickname");

    if(localStorage.getItem("idUser") != null)
    {
        const userSpecifico = await fetch("http://localhost:8080/progettoPersonale/api/v1/users/" + localStorage.getItem("idUser"));
        const userSpecificoJson = await userSpecifico.json();
        const nome = userSpecificoJson.nome;
        const cognome = userSpecificoJson.cognome;
        userNickname.innerText = nome + " " + cognome;
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