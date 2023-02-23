
// seleziona il bottone con class "button-menu"
const buttonMenu = document.getElementsByClassName('button-menu')[0];

// associa la funzione "showMenu" alla proprietà "onclick" del bottone
buttonMenu.onclick = showMenu;


function showMenu() {
  const expMenuElement = document.getElementById('expanded-menu');

  if (getComputedStyle(expMenuElement).display !== 'block') {
    expMenuElement.style.display = 'block';
  } else {
    expMenuElement.style.display = 'none';
  }
}
