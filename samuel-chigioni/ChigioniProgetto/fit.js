
class Prodotto {

  constructor(id,nome, prezzo) {

    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
    

  }

}
var counter=1;

function creaProdotto(element) {

  const selezione = element.dataset.value;
  
  var prodotto;

  if (selezione == 'Straps') {

    prodotto = new Prodotto(counter,"Straps", 9.99);

      }else if(selezione == 'Creatina'){
        prodotto = new Prodotto(counter,"Creatina",19.99);

      }else if(selezione == 'Proteine'){
        prodotto = new Prodotto(counter,"Proteine",24.99);

      }else if(selezione == 'T-shirt'){
        prodotto = new Prodotto(counter,"T-shirt",19.99);

      }else if(selezione == 'Short'){
        prodotto = new Prodotto(counter,"Short",29.99);

      }else if(selezione == 'Pre-workout'){
        prodotto = new Prodotto(counter,"Pre-workout",29.99);

      }else if(selezione == 'Fit-shoes'){
        prodotto = new Prodotto(counter,"Fit-shoes",49.99);

      }else if(selezione == 'Amminoacidi'){
        prodotto = new Prodotto(counter,"Creatina",12.95);

      }else if(selezione == 'Ammino'){
        prodotto = new Prodotto(counter,"Creatina",15.99);
        
  }

  console.log(prodotto)



counter++;
aggiungiAlCarrello(prodotto);

}

function aggiungiAlCarrello(prodotto){

const newElementTr = document.createElement('tr');
const newElementTh = document.createElement('th');

const textId = document.createTextNode(prodotto.id);

const newElementTdName = document.createElement('td');
const textName = document.createTextNode(prodotto.nome);

const newElementTdPrezzo = document.createElement('td');
const textPrezzo = document.createTextNode(prodotto.prezzo);

newElementTr.appendChild(newElementTh).appendChild(textId);
newElementTr.appendChild(newElementTdName).appendChild(textName);
newElementTr.appendChild(newElementTdPrezzo).appendChild(textPrezzo);




document.getElementById('corpo').appendChild(newElementTr);




}











function ciao() {
  risposta = prompt('Quanti ne vuoi acquistare?')
  if (risposta) {
    alert('Ok, vuoi acquistarne ' + risposta)
  }
}

//SLIDER:

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slide = document.getElementsByClassName("mySlides");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) { slideIndex = 1 }
  slide[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Cambia immagine ogni 2 secondi
}

//-------------------------------------------------------------



