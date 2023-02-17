// FARE I CONTROLLI DI DUPLICATI!!!!!!!

let idSocial=1;
let arraySocial=[];

/*async*/ function creaElementoSocial()
{
    let youtube;
    let youtubeMusic;
    let appleMusic;
    let deezer;
    let spotify;
    let soundcloud;

    if (document.getElementById("nomeSocial").value=="")
        alert("Non hai inserito il nome del social!");
    else if (document.getElementById("link").value=="")
        alert("Non hai inserito il link del social!");

    else if(similarity(document.getElementById("nomeSocial").value,"youtube")<0.8 && similarity(document.getElementById("nomeSocial").value,"deezer")<0.8 && similarity(document.getElementById("nomeSocial").value,"youtube music")<0.8 && similarity(document.getElementById("nomeSocial").value,"spotify")<0.8 && similarity(document.getElementById("nomeSocial").value,"apple music")<0.8 && similarity(document.getElementById("nomeSocial").value,"soundcloud")<0.8)
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

        if(similarity(document.getElementById("nomeSocial").value,"youtube")>=0.8)
        {
            sectionSocial.setAttribute('title','Youtube\nLink: '+document.getElementById("link").value);
            youtube=true;
        }
        else if(similarity(document.getElementById("nomeSocial").value,"deezer")>=0.8)
        {
            sectionSocial.setAttribute('title','Deezer\nLink: '+document.getElementById("link").value);
            deezer=true;
        }
        else if(similarity(document.getElementById("nomeSocial").value,"soundcloud")>=0.8)
        {
            sectionSocial.setAttribute('title','SoundCloud\nLink: '+document.getElementById("link").value);
            soundcloud=true;
        }
        else if(similarity(document.getElementById("nomeSocial").value,"spotify")>=0.8)
        {
            sectionSocial.setAttribute('title','Spotify\nLink: '+document.getElementById("link").value);
            spotify=true;
        }
        else if(similarity(document.getElementById("nomeSocial").value,"youtube music")>=0.8)
        {
            sectionSocial.setAttribute('title','Youtube Music\nLink: '+document.getElementById("link").value);
            youtubeMusic=true;
        }
        else if(similarity(document.getElementById("nomeSocial").value,"apple music")>=0.8)
        {
            sectionSocial.setAttribute('title','Apple Music\nLink: '+document.getElementById("link").value);
            appleMusic=true;
        }

        for (let i = 0; i < oggetti.length; i++)
        {
            let linkImmagine = document.createElement("a");
            let immagine = document.createElement("img");
            let figcaption = document.createElement("figcaption");
            let linkTesto = document.createElement("a");
            
            if(oggetti[i].id==="nomeSocial")
            {
                risultatoSimilarita=similarity(oggetti[i].value,"youtube");
                if(youtube)
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/youtube.png");
                    immagine.setAttribute("alt","Logo di Youtube");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(deezer)
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/deezer.png");
                    immagine.setAttribute("alt","Logo di Dezzer");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(soundcloud)
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/soundcloud.png");
                    immagine.setAttribute("alt","Logo di SoundCloud");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                    soundcloud=true;
                }
                else if(spotify)
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/spotify.png");
                    immagine.setAttribute("alt","Logo di Spotify");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(youtubeMusic)
                {
                    linkImmagine.setAttribute("href",oggetti[i].value);
                    immagine.setAttribute("src","../iconeSocial/youtube_music.png");
                    immagine.setAttribute("alt","Logo di Youtube Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    sectionSocial.appendChild(linkImmagine);
                }
                else if(appleMusic)
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
                // if(await isLinkValid(oggetti[i]))
                // {
                    // if(youtube)
                    //     linkTesto.innerText = "Youtube";
                    // else if(deezer)
                    //     linkTesto.innerText = "Deezer";
                    // else if(soundcloud)
                    //     linkTesto.innerText = "SouncCloud";
                    // else if(spotify)
                    //     linkTesto.innerText = "Spotify";
                    // else if(youtubeMusic)
                    //     linkTesto.innerText = "Youtube Music";
                    // else if(appleMusic)
                    //     linkTesto.innerText = "Apple Music";
                    // linkTesto.setAttribute("href",oggetti[i].value);
                    // figcaption.appendChild(linkTesto);
                    // sectionSocial.appendChild(figcaption);
                // }
                // else
                //     alert("La pagina da te inserita non è disponibile!");
                if(youtube)
                    linkTesto.innerText = "Youtube";
                else if(deezer)
                    linkTesto.innerText = "Deezer";
                else if(soundcloud)
                    linkTesto.innerText = "SouncCloud";
                else if(spotify)
                    linkTesto.innerText = "Spotify";
                else if(youtubeMusic)
                    linkTesto.innerText = "Youtube Music";
                else if(appleMusic)
                    linkTesto.innerText = "Apple Music";
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

// async function isLinkValid(link)
// {
//     const linkResponse = await fetch(link);
//     if(linkResponse.status==404)
//         return false;
//     return true; 
// }

function similarity(s1, s2)
{
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length)
    {
      longer = s2;
      shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength == 0)
      return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

  function editDistance(s1, s2)
  {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let costs = new Array();
    for (let i = 0; i <= s1.length; i++)
    {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++)
        {
            if (i == 0)
            costs[j] = j;
            else
            {
                if (j > 0)
                {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                    newValue = Math.min(Math.min(newValue, lastValue),
                        costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }