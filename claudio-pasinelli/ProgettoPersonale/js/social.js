// FARE I CONTROLLI DI SOMIGLIANZA!!!!!!!

let idSocial=1;
let arraySocial=[];

function creaElementoSocial()
{
    if (document.getElementById("nomeSocial").value=="")
        alert("Non hai inserito il nome del social!");
    else if (document.getElementById("link").value=="")
        alert("Non hai inserito il link del social!");
    else if(document.getElementById("nomeSocial").value!="youtube" && document.getElementById("nomeSocial").value!="deezer" && document.getElementById("nomeSocial").value!="apple music" && document.getElementById("nomeSocial").value!="soundcloud" && document.getElementById("nomeSocial").value!="youtube music" && document.getElementById("nomeSocial").value!="spotify")
    {
        alert("Ci dispiace, ma non conosciamo il sito!");
        document.getElementById('nomeSocial').value = '';
    }    
    else
    {
        //array di oggetti che contiene i social
        const oggetti = document.forms["social"].getElementsByTagName("input");
        const listaSocial = document.getElementById("listaSocial");
        // nuovoLinkSocial.setAttribute('id','social'+idTraccia);
        // nuovoLinkSocial.setAttribute('class','elementoTraccia zoom tip');
        
        const sectionSocial = document.createElement("section");
        sectionSocial.setAttribute("id","social"+idSocial);
        sectionSocial.style.marginBottom="25%";
        // sectionSocial.setAttribute('class','canzone');
        listaSocial.appendChild(sectionSocial);

        if(document.getElementById("nomeSocial").value==="youtube")
            sectionSocial.setAttribute('title','Youtube\nLink: '+document.getElementById("link").value);
        else if(document.getElementById("nomeSocial").value==="deezer")
            sectionSocial.setAttribute('title','Deezer\nLink: '+document.getElementById("link").value);
        else if(document.getElementById("nomeSocial").value==="soundcloud")
            sectionSocial.setAttribute('title','SoundCloud\nLink: '+document.getElementById("link").value);
        else if(document.getElementById("nomeSocial").value==="spotify")
            sectionSocial.setAttribute('title','Spotify\nLink: '+document.getElementById("link").value);
        else if(document.getElementById("nomeSocial").value==="youtube music")
            sectionSocial.setAttribute('title','Youtube Music\nLink: '+document.getElementById("link").value);
        else if(document.getElementById("nomeSocial").value==="apple music")
            sectionSocial.setAttribute('title','Apple Music\nLink: '+document.getElementById("link").value);

        for (let i = 0; i < oggetti.length; i++)
        {
            let linkImmagine = document.createElement("a");
            let immagine = document.createElement("img");
            let figcaption = document.createElement("figcaption");
            let linkTesto = document.createElement("a");

            if(oggetti[i].id==="nomeSocial")
            {
                if(oggetti[i].value==="youtube")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/youtube.png");
                    immagine.setAttribute("alt","Logo di Youtube");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(oggetti[i].value==="deezer")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/deezer.png");
                    immagine.setAttribute("alt","Logo di Dezzer");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(oggetti[i].value==="soundcloud")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/soundcloud.png");
                    immagine.setAttribute("alt","Logo di SoundCloud");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(oggetti[i].value==="spotify")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/spotify.png");
                    immagine.setAttribute("alt","Logo di Spotify");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(oggetti[i].value==="youtube music")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/youtube_music.png");
                    immagine.setAttribute("alt","Logo di Youtube Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(oggetti[i].value==="apple music")
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/apple_music.png");
                    immagine.setAttribute("alt","Logo di Apple Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
            }
            else if(oggetti[i].id==="link")
            {
                linkTesto.innerText = oggetti[i].value;
                linkTesto.setAttribute("href",oggetti[i].value);
                figcaption.appendChild(linkTesto);
                sectionSocial.appendChild(figcaption);
            }
        }
        //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social
        document.getElementById('nomeSocial').value = '';
        document.getElementById('link').value = '';

        arraySocial.push(listaSocial);
        arraySocial.push(idSocial);
        idSocial++;
    }
}