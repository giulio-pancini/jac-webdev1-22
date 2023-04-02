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
    let amazonMusic;
    let itunes;
    let tidal;
    let facebook;
    let twitter;
    let instagram;
    let linkedin;

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
        //array di oggetti che contiene i social
        const oggetti = document.forms["social"].getElementsByTagName("input");
        const listaSocial = document.getElementById("listaSocial");
        // nuovoLinkSocial.setAttribute('id','social'+idTraccia);
        // nuovoLinkSocial.setAttribute('class','elementoTraccia zoom tip');
        
        const figureSocial = document.createElement("figure");
        figureSocial.setAttribute("id","social"+idSocial);
        // figureSocial.setAttribute('class','canzone');
        listaSocial.appendChild(figureSocial);

        if(similarity(document.getElementById("nomeSocial").value,"youtube") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Youtube, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            youtube = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"deezer") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Deezer, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            deezer = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"soundcloud") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','SoundCloud, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            soundcloud = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"spotify") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Spotify, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            spotify = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"youtube music") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Youtube Music, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            youtubeMusic = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"apple music") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Apple Music, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            appleMusic = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"amazon music") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Amazon Music, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            amazonMusic = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"itunes") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','iTunes, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            itunes = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"tidal") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Tidal, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            tidal = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"facebook") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Facebook, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            facebook = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"twitter") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Twitter, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            twitter = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"instagram") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Instagram, link: ' + document.getElementById("link").value);
            figureSocial.setAttribute('class', 'socialContainer');
            instagram = true;
        }

        else if(similarity(document.getElementById("nomeSocial").value,"linkedin") >= 0.8)
        {
            figureSocial.setAttribute('data-tooltip','Linkedin, link: ' + document.getElementById("link").value);
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
                risultatoSimilarita=similarity(oggetti[i].value,"youtube");
                if(youtube)
                {
                    immagine.setAttribute("src","../iconeSocial/youtube.png");
                    immagine.setAttribute("alt","Logo di Youtube");
                    immagine.setAttribute("class","zoom");
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(deezer)
                {
                    immagine.setAttribute("src","../iconeSocial/deezer.png");
                    immagine.setAttribute("alt","Logo di Deezer");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(soundcloud)
                {
                    immagine.setAttribute("src","../iconeSocial/soundcloud.png");
                    immagine.setAttribute("alt","Logo di SoundCloud");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                    soundcloud = true;
                }

                else if(spotify)
                {
                    immagine.setAttribute("src","../iconeSocial/spotify.png");
                    immagine.setAttribute("alt","Logo di Spotify");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(youtubeMusic)
                {
                    immagine.setAttribute("src","../iconeSocial/youtube_music.png");
                    immagine.setAttribute("alt","Logo di Youtube Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(appleMusic)
                {
                    immagine.setAttribute("src","../iconeSocial/apple_music.png");
                    immagine.setAttribute("alt","Logo di Apple Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(amazonMusic)
                {
                    immagine.setAttribute("src","../iconeSocial/amazon_music.png");
                    immagine.setAttribute("alt","Logo di Amazon Music");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(itunes)
                {
                    immagine.setAttribute("src","../iconeSocial/itunes.png");
                    immagine.setAttribute("alt","Logo di iTunes Store");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(tidal)
                {
                    immagine.setAttribute("src","../iconeSocial/tidal.png");
                    immagine.setAttribute("alt","Logo di Tidal");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(facebook)
                {
                    immagine.setAttribute("src","../iconeSocial/facebook.png");
                    immagine.setAttribute("alt","Logo di Facebook");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(twitter)
                {
                    immagine.setAttribute("src","../iconeSocial/twitter.png");
                    immagine.setAttribute("alt","Logo di Twitter");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(instagram)
                {
                    immagine.setAttribute("src","../iconeSocial/instagram.png");
                    immagine.setAttribute("alt","Logo di Instagram");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }

                else if(linkedin)
                {
                    immagine.setAttribute("src","../iconeSocial/linkedin.png");
                    immagine.setAttribute("alt","Logo di Linkedin");
                    immagine.setAttribute("class","zoom");
                    linkImmagine.appendChild(immagine);
                    
                    if(oggetti[i+1].id === "link")
                    {
                        linkImmagine.setAttribute("href",oggetti[i+1].value);
                        linkImmagine.setAttribute("target","_blank");
                        linkImmagine.appendChild(immagine);
                    }
                    figureSocial.appendChild(linkImmagine);
                }
            }
            else if(oggetti[i].id === "link")
            {
                // if(await isLinkValid(oggetti[i]))
                // {
                    // if(youtube)
                    //     linkTesto.innerText = "Youtube";
                    // else if(deezer)
                    //     linkTesto.innerText = "Deezer";
                    // else if(soundcloud)
                    //     linkTesto.innerText = "SoundCloud";
                    // else if(spotify)
                    //     linkTesto.innerText = "Spotify";
                    // else if(youtubeMusic)
                    //     linkTesto.innerText = "Youtube Music";
                    // else if(appleMusic)
                    //     linkTesto.innerText = "Apple Music";
                    // linkTesto.setAttribute("href",oggetti[i].value);
                    // figcaption.appendChild(linkTesto);
                    // figureSocial.appendChild(figcaption);
                // }
                // else
                //     alert("La pagina da te inserita non è disponibile!");
                if(youtube)
                {
                    linkTesto.innerText = "Youtube";
                }

                else if(deezer)
                {
                    linkTesto.innerText = "Deezer";
                }
                else if(soundcloud)
                {
                    linkTesto.innerText = "SoundCloud";
                }

                else if(spotify)
                {
                    linkTesto.innerText = "Spotify";
                }

                else if(youtubeMusic)
                {
                    linkTesto.innerText = "Youtube Music";
                }

                else if(appleMusic)
                {
                    linkTesto.innerText = "Apple Music";
                }
                
                else if(amazonMusic)
                {
                    linkTesto.innerText = "Amazon Music";
                }

                else if(itunes)
                {
                    linkTesto.innerText = "iTunes";
                }

                else if(tidal)
                {
                    linkTesto.innerText = "Tidal";
                }

                else if(facebook)
                {
                    linkTesto.innerText = "Facebook";
                }

                else if(twitter)
                {
                    linkTesto.innerText = "Twitter";
                }

                else if(instagram)
                {
                    linkTesto.innerText = "Instagram";
                }

                else if(linkedin)
                {
                    linkTesto.innerText = "Linkedin";
                }

                linkTesto.setAttribute("href",oggetti[i].value);
                linkTesto.setAttribute("target","_blank");
                figcaption.appendChild(linkTesto);
                figureSocial.appendChild(figcaption);
            }
        }
        //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social
        document.getElementById('nomeSocial').value = '';
        document.getElementById('link').value = '';

        arraySocial.push(figureSocial);
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