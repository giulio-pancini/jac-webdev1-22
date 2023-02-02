let idContatto=1;
        let arrayContatti=[];

        function creaContatto()
        {
            const contenutoForm = document.forms["contatto"]["nome","cognome","indirizzo","email","dataNascita"].value;

            if (contenutoForm == "")
            	alert("Non hai compilato tutte le caselle!");
            else if ((!document.getElementById('maschio').checked) && (!document.getElementById('femmina').checked))
            	alert("Hai dimenticato di indicare il sesso!");
            else if(!(document.getElementById("email").value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)))
                alert("L'email inserita non è corretta!")
            else
            {
                //array di oggetti che compongono il contatto
                const oggetti = document.forms["contatto"].getElementsByTagName("input");

                const nuovoContatto = document.createElement("li");
                nuovoContatto.setAttribute('id','contatto'+idContatto);
                const listaTracce = document.getElementById("listaTracce");
                listaTracce.appendChild(nuovoContatto);

                //output dell'id del contatto
                const id = document.createElement("p");
                id.innerText = "Id: " + idContatto;
                nuovoContatto.appendChild(id);

                for (let i = 0; i < oggetti.length; i++)
                {
                    let valore = document.createElement("p");
                    
                    if(oggetti[i].type=="radio")
                    {
                        if(oggetti[i].checked)
                        {
                            valore.innerText = "Sesso: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                    }
                    else
                    {
                        if(oggetti[i].id==="nome")
                        {
                            valore.innerText = "Nome: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                        else if(oggetti[i].id==="cognome")
                        {
                            valore.innerText = "Cognome: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                        else if(oggetti[i].id==="indirizzo")
                        {
                            valore.innerText = "Indirizzo: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                        else if(oggetti[i].id==="email")
                        {
                            valore.innerText = "Email: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                        else if(oggetti[i].id==="dataNascita")
                        {
                            valore.innerText = "Data di nascita: " + oggetti[i].value;
                            nuovoContatto.appendChild(valore);
                        }
                    }
                }
                //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il contatto
                document.getElementById('nome').value = '';
                document.getElementById('cognome').value = '';
                document.getElementById('email').value = '';
                document.getElementById('indirizzo').value = '';
                document.querySelector('input[name="sesso"]:checked').checked = false;
                document.getElementById('dataNascita').value = '';

                //creo il bottone per eliminare il contatto
                const bottoneElimina = document.createElement("button");
                bottoneElimina.setAttribute('id','delContatto');
                bottoneElimina.setAttribute('onclick','eliminaContatto('+idContatto+')');
                bottoneElimina.innerText="Elimina Contatto";
                nuovoContatto.appendChild(bottoneElimina);
                
                const contattoIntero = document.getElementById("contatto"+idContatto.toString());

                //metto nell'arrayContatti l'id che poi incremento
                arrayContatti.push(idContatto);
                // arrayContatti.push(contattoIntero);

                idContatto++;
            }
        }
        function eliminaContatto(id)
        {
            if(arrayContatti.includes(id))
            {
                const contattoDaEliminare = document.getElementById("contatto"+id.toString());
                const indice = arrayContatti.indexOf(id);

                arrayContatti.splice(indice,1);
                contattoDaEliminare.remove();
            }
            else
                alert("Il contatto \""+id+"\" non è stato trovato!");
        }