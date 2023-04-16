let idSocial = 1;
let arraySocial = [];

async function creaSocialJson()
{
    const inviaBtn = document.getElementById("inviaSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    if (document.getElementById("nomeSocial").value === "")
    {
        alert("Non hai inserito il nome del social!");
        return;
    }

    else if (document.getElementById("link").value === "")
    {
        alert("Non hai inserito il link del social!");
        return;
    }

    else if(
        similarity(document.getElementById("nomeSocial").value,"youtube") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"deezer") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"youtube music") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"spotify") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"apple music") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"soundcloud") < 0.8
        && similarity(document.getElementById("nomeSocial").value,"amazon music") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"itunes") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"tidal") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"facebook") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"twitter") < 0.8 
        && similarity(document.getElementById("nomeSocial").value,"instagram") < 0.8
        && similarity(document.getElementById("nomeSocial").value,"linkedin") < 0.8
    )
    {
        alert("Ci dispiace, ma non conosciamo il sito!");
        document.getElementById('nomeSocial').value = '';
        return;
    }
    
    else
    {
        if(!isURLValid(document.getElementById("link").value))
        {
            alert("La pagina da te inserita non è disponibile!");
            document.getElementById('link').value = '';
            return;
        }

        const risultatoFetch = await isLinkValid(document.getElementById("link").value);

        if(similarity(document.getElementById("nomeSocial").value,"youtube") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Youtube, link: ' + document.getElementById("link").value,
                media: 'Youtube',
                link: document.getElementById("link").value,
                img: '../iconeSocial/youtube.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"deezer") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Deezer, link: ' + document.getElementById("link").value,
                media: 'Deezer',
                link: document.getElementById("link").value,
                img: '../iconeSocial/deezer.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"soundcloud") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'SoundCloud, link: ' + document.getElementById("link").value,
                media: 'SoundCloud',
                link: document.getElementById("link").value,
                img: '../iconeSocial/soundcloud.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"spotify") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Spotify, link: ' + document.getElementById("link").value,
                media: 'Spotify',
                link: document.getElementById("link").value,
                img: '../iconeSocial/spotify.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"youtube music") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Youtube Music, link: ' + document.getElementById("link").value,
                media: 'Youtube Music',
                link: document.getElementById("link").value,
                img: '../iconeSocial/youtube_music.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"apple music") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Apple Music, link: ' + document.getElementById("link").value,
                media: 'Apple Music',
                link: document.getElementById("link").value,
                img: '../iconeSocial/apple_music.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"amazon music") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Amazon Music, link: ' + document.getElementById("link").value,
                media: 'Amazon Music',
                link: document.getElementById("link").value,
                img: '../iconeSocial/amazon_music.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"itunes") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'iTunes, link: ' + document.getElementById("link").value,
                media: 'Itunes',
                link: document.getElementById("link").value,
                img: '../iconeSocial/itunes.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"tidal") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Tidal, link: ' + document.getElementById("link").value,
                media: 'Tidal',
                link: document.getElementById("link").value,
                img: '../iconeSocial/tidal.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"facebook") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Facebook, link: ' + document.getElementById("link").value,
                media: 'Facebook',
                link: document.getElementById("link").value,
                img: '../iconeSocial/facebook.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"twitter") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Twitter, link: ' + document.getElementById("link").value,
                media: 'Twitter',
                link: document.getElementById("link").value,
                img: '../iconeSocial/twitter.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"instagram") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Instagram, link: ' + document.getElementById("link").value,
                media: 'Instagram',
                link: document.getElementById("link").value,
                img: '../iconeSocial/instagram.png',
            }

            arraySocial.push(social);

            idSocial++;
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"linkedin") >= 0.8 && isURLValid(document.getElementById("link").value) && risultatoFetch)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Linkedin, link: ' + document.getElementById("link").value,
                media: 'Linkedin',
                link: document.getElementById("link").value,
                img: '../iconeSocial/linkedin.png',
            }

            arraySocial.push(social);

            idSocial++;
        }

        if(!risultatoFetch)
        {
            inviaBtn.style.display = "none";
            testoMessaggio.innerText = "Il sito è non raggiungibile!";
            testoMessaggio.style.color = "red";
    
            setTimeout(() =>
            {
                testoMessaggio.innerText = "";
                inviaBtn.style.display = "block";
                document.getElementById('link').value = "";
            }, 3000);
        }

        else if(risultatoFetch)
        {
            inviaBtn.style.display = "none";
            testoMessaggio.innerText = "Il sito è raggiungibile!";
            testoMessaggio.style.color = "lightgreen";
    
            setTimeout(() =>
            {
                testoMessaggio.innerText = "";
                inviaBtn.style.display = "block";
                creaSocial(social);
            }, 2500);
        }
    }
}

async function creaSocial(social)
{
    let youtube;
    let deezer;
    let soundcloud;
    let spotify;
    let youtubeMusic;
    let appleMusic;
    let amazonMusic;
    let itunes;
    let tidal;
    let facebook;
    let twitter;
    let instagram;
    let linkedin;

    //array di oggetti che contiene i social
    const oggetti = document.forms["social"].getElementsByTagName("input");
    const listaSocial = document.getElementById("listaSocial");
    // nuovoLinkSocial.setAttribute('id','social'+idTraccia);
    // nuovoLinkSocial.setAttribute('class','elementoTraccia zoom tip');

    const figureSocial = document.createElement("figure");
    figureSocial.setAttribute("id","social"+idSocial);
    // figureSocial.setAttribute('class','canzone');
    listaSocial.appendChild(figureSocial);

    if(social.media === "Youtube")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        youtube = true;
    }

    else if(social.media === "Deezer")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        deezer = true;
    }

    else if(social.media === "SoundCloud")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        soundcloud = true;
    }

    else if(social.media === "Spotify")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        spotify = true;
    }

    else if(social.media === "Youtube Music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        youtubeMusic = true;
    }

    else if(social.media === "Apple Music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        appleMusic = true;
    }

    else if(social.media === "Amazon Music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        amazonMusic = true;
    }

    else if(social.media === "Itunes")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        itunes = true;
    }

    else if(social.media === "Tidal")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        tidal = true;
    }

    else if(social.media === "Facebook")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        facebook = true;
    }

    else if(social.media === "Twitter")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        twitter = true;
    }

    else if(social.media === "Instagram")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        instagram = true;
    }

    else if(social.media === "Linkedin")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        linkedin = true;
    }

    for (let i = 0; i < oggetti.length; i++)
    {
        let linkImmagine = document.createElement("a");
        let immagine = document.createElement("img");
        let figcaption = document.createElement("figcaption");
        let linkTesto = document.createElement("a");
        
        if(oggetti[i].id === "nomeSocial")
        {
            if(youtube)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Youtube");
                immagine.setAttribute("class","zoom");
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(deezer)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Deezer");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(soundcloud)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di SoundCloud");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    immagine.setAttribute("src", social.img);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
                soundcloud = true;
            }

            else if(spotify)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Spotify");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(youtubeMusic)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Youtube Music");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(appleMusic)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Apple Music");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(amazonMusic)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Amazon Music");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(itunes)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di iTunes Store");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(tidal)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Tidal");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(facebook)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Facebook");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(twitter)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Twitter");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(instagram)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Instagram");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }

            else if(linkedin)
            {
                immagine.setAttribute("src", social.img);
                immagine.setAttribute("alt","Logo di Linkedin");
                immagine.setAttribute("class","zoom");
                linkImmagine.appendChild(immagine);
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href",social.link);
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }
                figureSocial.appendChild(linkImmagine);
            }
        }

        else if(oggetti[i].id === "link")
        {
            linkTesto.innerText = social.media; 
            linkTesto.setAttribute("href",social.link);
            linkTesto.setAttribute("target","_blank");
            figcaption.appendChild(linkTesto);
            figureSocial.appendChild(figcaption);
        }
    }

    //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social

    figureSocial.style.animation = "fadeIn 1.2s";
    figureSocial.style.animationIterationCount = "1";
    document.getElementById('nomeSocial').value = '';
    document.getElementById('link').value = '';

    if(arraySocial.length !== 0)
    {
        listaSocial.style.border = "solid rgb(255, 255, 255)";
        listaSocial.style.borderWidth = "1px 0px 0px 0px";
    }
}

// async function isLinkValid(link)
// {
//     const linkResponse = await fetch(link);
//     if(linkResponse.status==404)
//         return false;
//     return true; 
// }

async function isLinkValid(link)
{
    const inviaBtn = document.getElementById("inviaSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    inviaBtn.style.display = "none";
    testoMessaggio.style.color = "white";
    testoMessaggio.innerText = "Stiamo verificando se il sito è raggiungibile.";

    await new Promise(resolve => setTimeout(resolve, 5000));

    try
    {
        const response = await fetch(link, { mode: 'no-cors' });
        return true;
    } 

    catch (e)
    {
        return false;
    }
}

function isURLValid(urlStr)
{
    let url;

    try
    {
        url = new URL(urlStr);
    }
    
    catch (error)
    {
        return false;
    }

    return true;
}

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
    {
        return 1.0;
    }

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
            {
                costs[j] = j;
            }

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
        {
            costs[s2.length] = lastValue;
        }
    }

    return costs[s2.length];
  }