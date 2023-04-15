let currentIndex = 0;
let images = [];
let animazioneFatta = false;

function showImage(index)
{
    const currentImage = document.getElementById("currentImage");
    const precedente = document.getElementById("prevImage");
    const successivo = document.getElementById("nextImage");
    const cancella = document.getElementById("deleteImage");

    if (images.length === 0)
    {
        currentImage.src = "";

        precedente.style.visibility = "hidden";
        successivo.style.visibility = "hidden";
        cancella.style.visibility = "hidden";
    }

    else
    {
        precedente.style.visibility = "visible";
        successivo.style.visibility = "visible";
        cancella.style.visibility = "visible";
        currentImage.src = images[index];

        if(!animazioneFatta)
        {
            playAnimation(currentImage);
        }

        else if(images.length > 1 && animazioneFatta)
        {
            animazioneFatta = false;

            playAnimation(currentImage);
        }
    }
}

function nextImage()
{
    if (images.length === 0)
    {
        return;
    }

    if (currentIndex === images.length - 1)
    {
        currentIndex = 0;
    }

    else
    {
        currentIndex++;
    }

    showImage(currentIndex);
}

function prevImage()
{
    if (images.length === 0)
    {
        return;
    }

    if (currentIndex === 0)
    {
        currentIndex = images.length - 1;
    }

    else
    {
        currentIndex--;
    }

    showImage(currentIndex);
}

function addImage()
{
    const input = document.getElementById("imageInput");
    const file = input.files[0];

    if (!file)
    {
        alert("Non hai inserito nessuna immagine!");
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function()
    {
        const image = reader.result;
        images.push(image);

        // if (currentIndex === 0)
        // {
        //     showImage(0);
        // }
    }

    input.value = "";
}

function deleteImage()
{
    if (images.length === 0)
    {
        return;
    }

    images.splice(currentIndex, 1);

    if (currentIndex === images.length)
    {
        currentIndex--;
    }

    showImage(currentIndex);
}

function playAnimation (image)
{
    image.style.animation = "fadeIn 1.2s";
    image.style.animationIterationCount = "1";
    animazioneFatta = true;

    setTimeout(() =>
    {
        image.style.animation = "";
        image.style.animationIterationCount = "0";
    }, 1200);
}

setInterval(function()
{
    nextImage();
}, 5000);