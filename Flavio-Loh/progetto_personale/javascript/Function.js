const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const product = {
      name: this.dataset.name,
      price: this.dataset.price
    };

    addToCart(product);
  });
});

function addToCart(product) {
  const row = document.createElement('tr');

  // Crea due nuove celle (td) per il nome e il prezzo del prodotto
  const nameCell = document.createElement('td');
  nameCell.textContent = product.name;
  row.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.textContent = product.price;
  row.appendChild(priceCell);

  // Aggiunge la riga alla tabella del carrello
  const cartTable = document.querySelector('#cart tbody');
  cartTable.appendChild(row);
}
