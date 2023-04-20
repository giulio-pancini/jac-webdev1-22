let idSocial = 1;
let arraySocial = [];
let arrayMedia =
[
    "youtube",
    "deezer",
    "youtube music",
    "spotify",
    "apple music",
    "soundcloud",
    "amazon music",
    "itunes",
    "tidal",
    "facebook",
    "twitter",
    "instagram",
    "linkedin",
    "tiktok",
    "snapchat",
]

class Social
{
    #id;
    #dataTooltip;
    #media;
    #link;
    #img;

    constructor(id, dataTooltip, media, link, img)
    {
        this.#id = id;
        this.#dataTooltip = dataTooltip;
        this.#media = media;
        this.#link = link;
        this.#img = img;
    }

    getMedia()
    {
        return this.#media;
    }

    getLink()
    {
        return this.#link;
    }

    getImg()
    {
        return this.#img;
    }

    getDataTooltip()
    {
        return this.#dataTooltip;
    }
}

async function creaSocialJson()
{
    const inviaBtn = document.getElementById("inviaSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    if (document.getElementById("nomeSocial").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il nome del social!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('link').value = "";
        }, 2500);

        return;
    }

    else if (document.getElementById("link").value === "")
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });

        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Non hai inserito il link del social!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('link').value = "";
        }, 2500);

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
        && similarity(document.getElementById("nomeSocial").value,"tiktok") < 0.8
        && similarity(document.getElementById("nomeSocial").value,"snapchat") < 0.8
    )
    {
        testoMessaggio.scrollIntoView(
            {
                behavior: 'smooth',
                block: 'end'
            });
            
        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Ci dispiace tanto, ma non conosciamo il sito!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('link').value = "";
        }, 2500);

        document.getElementById('nomeSocial').value = '';

        return;
    }

    if(!isURLValid(document.getElementById("link").value))
    {
        inviaBtn.style.display = "none";
        testoMessaggio.style.display = "block";
        testoMessaggio.innerText = "Il link inserito non è valido!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('link').value = "";
        }, 2500);

        document.getElementById('link').value = '';
        return;
    }

    const risultatoFetch = await isLinkValid(document.getElementById("link").value);

    if(!risultatoFetch)
    {
        inviaBtn.style.display = "none";
        testoMessaggio.innerText = "Il sito è non raggiungibile!";
        testoMessaggio.style.color = "red";

        setTimeout(() =>
        {
            testoMessaggio.innerText = "";
            inviaBtn.style.display = "block";
            testoMessaggio.style.display = "none";
            document.getElementById('link').value = "";

        }, 2500);

        return;
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
            testoMessaggio.style.display = "none";
        }, 2500);
    }

    let media;
    let mediaLowerCase;
    let dataTooltip;
    let link;
    let img;
    
    for(mediaSocial of arrayMedia)
    {
        if(similarity(document.getElementById("nomeSocial").value, mediaSocial) >= 0.8)
        {
            if(mediaSocial === "soundcloud")
            {
                media = "SoundCloud";
                mediaLowerCase = mediaSocial;
                break;
            }

            else if(mediaSocial === "itunes")
            {
                media = "iTunes";
                mediaLowerCase = mediaSocial;
                break;
            }

            else if(mediaSocial === "tiktok")
            {
                media = "TikTok";
                mediaLowerCase = mediaSocial;
                break;
            }
            
            mediaLowerCase = mediaSocial;
            media = everyLetterUpperCase(document.getElementById("nomeSocial").value);
            break;
        }
    }

    dataTooltip = media + ", link: " + document.getElementById("link").value;
    link = document.getElementById("link").value;
    img = "../iconeSocial/" + mediaLowerCase + ".png";

    const social = new Social(idSocial, dataTooltip, media, link, img);
    
    arraySocial.push(social);

    idSocial++;

    creaSocial(social);
}

function creaSocial(social)
{
    let soundcloud;
    let itunes;
    let tiktok;

    if(social.getMedia() === "SoundCloud")
    {
        soundcloud = true;
    }

    else if(social.getMedia() === "iTunes")
    {
        soundcloud = true;
    }

    else if(social.getMedia() === "TikTok")
    {
        tiktok = true;
    }

    //array di oggetti che contiene i social
    const oggetti = document.forms["social"].getElementsByTagName("input");
    const listaSocial = document.getElementById("listaSocial");

    listaSocial.style.marginTop = "1.5rem";

    const figureSocial = document.createElement("figure");
    figureSocial.setAttribute("id","social" + idSocial);
    // figureSocial.setAttribute('class','canzone');
    listaSocial.appendChild(figureSocial);

    for(mediaSocial of arrayMedia)
    {
        if(social.getMedia() === everyLetterUpperCase(mediaSocial) && !soundcloud && !itunes)
        {
            figureSocial.setAttribute('data-tooltip', social.getDataTooltip());
            figureSocial.setAttribute('class', 'socialContainer');
            break;
        }
        
        else if (soundcloud || itunes || tiktok)
        {
            figureSocial.setAttribute('data-tooltip', social.getDataTooltip());
            figureSocial.setAttribute('class', 'socialContainer');
            break;
        }
    }

    for (let i = 0; i < oggetti.length; i++)
    {
        let linkImmagine = document.createElement("a");
        let immagine = document.createElement("img");
        let figcaption = document.createElement("figcaption");
        let linkTesto = document.createElement("a");
        
        if(oggetti[i].id === "nomeSocial")
        {
                immagine.setAttribute("src", social.getImg());
                immagine.setAttribute("alt","Logo di " + social.getMedia());
                immagine.setAttribute("class","zoom");
                
                if(oggetti[i+1].id === "link")
                {
                    linkImmagine.setAttribute("href", social.getLink());
                    linkImmagine.setAttribute("target","_blank");
                    linkImmagine.appendChild(immagine);
                }

                figureSocial.appendChild(linkImmagine);
        }

        else if(oggetti[i].id === "link")
        {
            linkTesto.innerText = social.getMedia(); 
            linkTesto.setAttribute("href", social.getLink());
            linkTesto.setAttribute("target", "_blank");
            figcaption.appendChild(linkTesto);
            figureSocial.appendChild(figcaption);
        }
    }

    //resetto il valore del contenuto del form dopo che è stato utilizzato per creare il link social

    figureSocial.style.animation = "fadeIn 1.2s";
    figureSocial.style.animationIterationCount = "1";
    document.getElementById('nomeSocial').value = '';
    document.getElementById('link').value = '';

    figureSocial.scrollIntoView(
        {
            behavior: 'smooth',
            block: 'end'
        });

    if(arraySocial.length !== 0)
    {
        listaSocial.style.border = "solid rgb(255, 255, 255)";
        listaSocial.style.borderWidth = "1px 0px 0px 0px";
    }
}

async function isLinkValid(link)
{
    const inviaBtn = document.getElementById("inviaSocial");
    let testoMessaggio = document.getElementById("messaggioFetch");

    inviaBtn.style.display = "none";
    testoMessaggio.style.color = "white";
    testoMessaggio.style.display = "block";
    testoMessaggio.innerText = "Stiamo verificando se il sito è raggiungibile.";

    await new Promise(resolve => setTimeout(resolve, 1000));

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

function everyLetterUpperCase(str)
{
    const arr = str.split(" ");

    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return str2 = arr.join(" ");
}