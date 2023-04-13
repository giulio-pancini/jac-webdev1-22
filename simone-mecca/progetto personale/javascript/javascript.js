var imageList = Array();
for (var i = 1; i <= 5; i++) {
    imageList[i] = new Image(70, 70);
    imageList[i].src = "../immagini/schema" + i + ".png";
}

function cambiaImmagine() {
    var selectedImage = document.myForm.switch.options[document.myForm.switch.selectedIndex].value;
    document.myImage.src = imageList[selectedImage].src;
}

function createPopupWin(pageURL, pageTitle, popupWinWidth, popupWinHeight) {
    var left = (screen.width - popupWinWidth) / 2;
    var top = (screen.height - popupWinHeight) / 4;

    var statistiche = window.open(pageURL, pageTitle, 'resizable=yes, width=' + popupWinWidth + ', height=' + popupWinHeight + ', top=' + top + ', left=' + left);

    statistiche.addEventListener("load", function () {
        statistiche.scrollTo(0, statistiche.innerHeight / 2);
    });

}

function comparsagiocatori(tipogiocatore, classegiocatori) {
    const mostraBottoniCheckbox = document.getElementById(tipogiocatore);
    const bottoni = document.querySelectorAll(classegiocatori);
    if (mostraBottoniCheckbox.checked) {
        bottoni.forEach((bottone) => {
            bottone.style.display = "block";
        });
    } else {
        bottoni.forEach((bottone) => {
            bottone.style.display = "none";
        });
    }
}

const draggableElements = document.querySelectorAll(".bottonigiocatori");
const droppableElements = document.querySelectorAll(".giocatoriattivi");

draggableElements.forEach(elem => {
    elem.draggable = true;
    elem.addEventListener("dragstart", e => e.dataTransfer.setData("text", e.target.innerHTML));
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragover", e => e.preventDefault());
    elem.addEventListener("drop", e => {
        e.preventDefault();
        e.target.value = e.dataTransfer.getData("text");
    });
});