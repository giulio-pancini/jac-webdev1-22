var imageList = Array();
for (var i = 1; i <= 5; i++) {
    imageList[i] = new Image(70, 70);
    imageList[i].src = "../immagini/schema" + i + ".png";
}

function cambiaImmagine() {
    var selectedImage = document.myForm.switch.options[document.myForm.switch.selectedIndex].value;
    document.myImage.src = imageList[selectedImage].src;
}


function comparsagiocatori() {
    if (document.getElementById("PG").checked == true)
        document.getElementById("PointGuard").style.display = "inline-block";
    else
        document.getElementById("PointGuard").style.display = "none";

    if (document.getElementById("SG").checked == true)
        document.getElementById("ShootingGuard").style.display = "inline-block";
    else
        document.getElementById("ShootingGuard").style.display = "none";

    if (document.getElementById("SF").checked == true)
        document.getElementById("SmallForward").style.display = "inline-block";
    else
        document.getElementById("SmallForward").style.display = "none";

    if (document.getElementById("PF").checked == true)
        document.getElementById("PowerForward").style.display = "inline-block";
    else
        document.getElementById("PowerForward").style.display = "none";

    if (document.getElementById("C").checked == true)
        document.getElementById("Center").style.display = "inline-block";
    else
        document.getElementById("Center").style.display = "none";
}

function createPopupWin(pageURL, pageTitle, popupWinWidth, popupWinHeight) {
    var left = (screen.width - popupWinWidth) / 2;
    var top = (screen.height - popupWinHeight) / 4;
  
    var statistiche = window.open(pageURL, pageTitle, 'resizable=yes, width=' + popupWinWidth + ', height=' + popupWinHeight + ', top=' + top + ', left=' + left);

    statistiche.addEventListener("load", function () {
        statistiche.scrollTo(0, statistiche.innerHeight / 2);
    });
    
  }
  