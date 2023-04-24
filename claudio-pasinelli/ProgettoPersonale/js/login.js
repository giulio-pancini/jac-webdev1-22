class User
{
    email;
    nome;
    cognome;
    password;
    tipo;

    constructor(email, nome, cognome, password, tipo)
    {
        this.email = email;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
        this.tipo = tipo;
    }

    getEmail()
    {
        return this.email;
    }

    getNome()
    {
        return this.nome;
    }

    getCognome()
    {
        return this.cognome;
    }

    getPassword()
    {
        return this.password;
    }

    getTipo()
    {
        return this.tipo;
    }
}

async function inviaDatiForm()
{
    let testoMessaggio = document.getElementById("messaggioForm");
    const btnLogin = document.getElementById("inviaDati");

    const compositoreForm = document.getElementById("compositore");  
    const nonCompositoreForm = document.getElementById("non_compositore"); 

    //verifico l'email
    if(document.getElementById("email").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito nessuna email!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('email').value = '';
        }, 3000);

        return;
    }

    //verifico il nome
    if(document.getElementById("nome").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il tuo nome!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('nome').value = '';
        }, 3000);

        return;
    }
    
    //verifico il cognome
    if(document.getElementById("cognome").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il tuo cognome!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('cognome').value = '';
        }, 3000);

        return;
    }

    //verifico la password
    if(document.getElementById("password").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito la tua password!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('password').value = '';
        }, 3000);

        return;
    }

    //verifico le checkbox
    else if (compositoreForm.checked == false && nonCompositoreForm.checked == false)
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        btnLogin.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai dichiarato il tuo status!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            btnLogin.style.display = "inline";
            testoMessaggio.style.display = "none";
            document.getElementById('compositore').value = '';
            document.getElementById('non_compositore').value = '';
        }, 3000);

        return;
    } 

    const email = document.getElementById("email").value;
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const password = document.getElementById("password").value;
    let tipo;

    if(document.getElementById("compositore").checked === true)
    {
        tipo = document.getElementById("compositore").value;
    }

    else if(document.getElementById("non_compositore").checked === true)
    {
        tipo = document.getElementById("non_compositore").value;
    }

    //creo un nuovo utente
    const user = new User(email, nome, cognome, password, tipo);

    //resetto i valori del form
    document.getElementById('email').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('password').value = '';
    document.getElementById('compositore').checked = false;
    document.getElementById('non_compositore').checked = false;

    let utenteTrovato = false;

    const response = await fetch("http://localhost:8080/progettoPersonale/api/v1/users/");
    const responseJson = await response.json();

    for(let i = 0; i < responseJson.length; i++)
    {
        if(responseJson[i].password === password)
        {
            //riempio il localStorage
            localStorage.setItem("Nome", nome);
            localStorage.setItem("Cognome", cognome);
            localStorage.setItem("Tipo", tipo);

            utenteTrovato = true;
            break;
        }
    }

    if(utenteTrovato)
    {
        setTimeout(() =>
        {
            window.location.href = "index.html";
        }, 1000);
    }

    else if(!utenteTrovato)
    {
        const body = JSON.stringify(user);
    
        console.log("richiamo la users in POST");
    
        const postUser = await fetch("http://localhost:8080/progettoPersonale/api/v1/users/",
        {
            method: "POST",
            headers:
            {
                "content-type":'application/json'
            },
            body: body
        });
        
        //riempio il localStorage
        localStorage.setItem("Nome", nome);
        localStorage.setItem("Cognome", cognome);
        localStorage.setItem("Tipo", tipo);
        
        setTimeout(() =>
        {
            window.location.href = "index.html";
        }, 1000);
    }
}