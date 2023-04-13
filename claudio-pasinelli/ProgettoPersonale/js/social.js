// FARE I CONTROLLI DI DUPLICATI!!!!!!!

let idSocial = 1;
let arraySocial = [];

function creaSocialJson()
{
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
        if(similarity(document.getElementById("nomeSocial").value,"youtube") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Youtube, link: ' + document.getElementById("link").value,
                media: 'youtube',
                link: 'Youtube',
                img: '../iconeSocial/youtube.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"deezer") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Deezer, link: ' + document.getElementById("link").value,
                media: 'deezer',
                link: 'Deezer',
                img: '../iconeSocial/deezer.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"soundcloud") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'SoundCloud, link: ' + document.getElementById("link").value,
                media: 'soundcloud',
                link: 'SoundCloud',
                img: '../iconeSocial/soundcloud.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"spotify") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Spotify, link: ' + document.getElementById("link").value,
                media: 'spotify',
                link: 'Spotify',
                img: '../iconeSocial/spotify.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"youtube music") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Youtube Music, link: ' + document.getElementById("link").value,
                media: 'youtube music',
                link: 'Youtube Music',
                img: '../iconeSocial/youtube_music.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"apple music") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Apple Music, link: ' + document.getElementById("link").value,
                media: 'apple music',
                link: 'Apple Music',
                img: '../iconeSocial/apple_music.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"amazon music") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Amazon Music, link: ' + document.getElementById("link").value,
                media: 'amazon music',
                link: 'Amazon Music',
                img: '../iconeSocial/amazon_music.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"itunes") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'iTunes, link: ' + document.getElementById("link").value,
                media: 'itunes',
                link: 'iTunes',
                img: '../iconeSocial/itunes.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"tidal") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Tidal, link: ' + document.getElementById("link").value,
                media: 'tidal',
                link: 'Tidal',
                img: '../iconeSocial/tidal.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"facebook") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Facebook, link: ' + document.getElementById("link").value,
                media: 'facebook',
                link: 'Facebook',
                img: '../iconeSocial/facebook.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"twitter") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Twitter, link: ' + document.getElementById("link").value,
                media: 'twitter',
                link: 'Twitter',
                img: '../iconeSocial/twitter.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"instagram") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Instagram, link: ' + document.getElementById("link").value,
                media: 'instagram',
                link: 'Instagram',
                img: '../iconeSocial/instagram.png',
            }

            arraySocial.push(social);
        }
    
        else if(similarity(document.getElementById("nomeSocial").value,"linkedin") >= 0.8)
        {
            social =
            {
                id: idSocial,
                dataTooltip: 'Linkedin, link: ' + document.getElementById("link").value,
                media: 'linkedin',
                link: 'Linkedin',
                img: '../iconeSocial/linkedin.png',
            }

            arraySocial.push(social);
        }

        idSocial++;

        creaSocial(social);
    }
}

/*async*/ function creaSocial(social)
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

    if(social.media === "youtube")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        youtube = true;
    }

    else if(social.media === "deezer")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        deezer = true;
    }

    else if(social.media === "soundcloud")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        soundcloud = true;
    }

    else if(social.media === "spotify")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        spotify = true;
    }

    else if(social.media === "youtube music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        youtubeMusic = true;
    }

    else if(social.media === "apple music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        appleMusic = true;
    }

    else if(social.media === "amazon music")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        amazonMusic = true;
    }

    else if(social.media === "itunes")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        itunes = true;
    }

    else if(social.media === "tidal")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        tidal = true;
    }

    else if(social.media === "facebook")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        facebook = true;
    }

    else if(social.media === "twitter")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        twitter = true;
    }

    else if(social.media === "instagram")
    {
        figureSocial.setAttribute('data-tooltip', social.dataTooltip);
        figureSocial.setAttribute('class', 'socialContainer');
        instagram = true;
    }

    else if(social.media === "linkedin")
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
                    linkImmagine.setAttribute("href",oggetti[i+1].value);
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
            linkTesto.innerText = social.link;
            linkTesto.setAttribute("href",oggetti[i].value);
            linkTesto.setAttribute("target","_blank");
            figcaption.appendChild(linkTesto);
            figureSocial.appendChild(figcaption);
        }
    }
    //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social
    document.getElementById('nomeSocial').value = '';
    document.getElementById('link').value = '';

    if(arraySocial.length !== 0)
    {
        listaSocial.style.border = "solid rgb(255, 255, 255)";
        listaSocial.style.borderWidth = "2px 0px 0px 0px";
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