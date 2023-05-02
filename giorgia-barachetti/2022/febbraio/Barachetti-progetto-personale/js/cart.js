const products = [
  //JUMPING  
    {
      id: 1,
      image:'jump.jpg',
      name: 'SUPREME SADDLE',
      description: 'EQUIPE',
      price: 958.99
    },
    {
      id: 2,
      image: '',
      name: 'SYNERGY SPECIAL',
      description: 'EQUIPE',
      price: 3019.99
    },
    {
      id: 3,
      image:'',
      name: 'PRO SADDLE',
      description: 'PRO LIGHT',
      price: 290.99
    },
    //DRESSAGE
    {
      id: 4,
      image:'',
      name: 'SADDLE PHILOSOPHY K',
      description: 'PRESTIGE',
      price: 4200.99
    },
    {
      id: 5,
      image:'',
      name: 'TEKNA',
      description: 'PRESTIGE',
      price: 379.99
    },
    {
      id: 6,
      image:'',
      name: 'X-HELEN K',
      description: 'PRESTIGE',
      price: 4100.99
    },
    //TREKKING
    {
      id: 7,
      image:'',
      name: 'TREKKER M',
      description: 'PRESTIGE',
      price: 2450.99
    },
    {
      id: 8,
      image:'',
      name: 'BRIGHTON',
      description: 'PRESTIGE',
      price: 1900.99
    },
    //WESTERN
    {
      id: 9,
      image:'',
      name: 'REINING BUTTERFLY 2040',
      description: "POOL'S",
      price: 1432.99
    },
    {
      id: 10,
      image:'',
      name: 'GENUINE CUTTER 7070',
      description: "POOL'S",
      price: 1490.99
    },
    {
      id: 11,
      image:'',
      name: 'BILLY COOK PRO ARABIAN',
      description: "POOL'S",
      price: 2350.99
    },
  ];
  
  
  const emptyArray = [];
  function addToCart(product) {
    const cart = document.querySelector('#sectionCart table');
    
    const cartItem = document.createElement('tr');
    //creo la section del carrello che sarà visualizzata nel cart
    cartItem.innerHTML = `
        
          <td>${product.name}</td>
          <td>${product.description}</td>
          <td>${product.price} €</td>
          <img src="${"
        
      `;
    
    cart.appendChild(cartItem);
    alert('Product added in the cart')
    emptyArray.push(cartItem);
    console.log(emptyArray);
   
    sumOfCart()
  }

//TOTAL PRICE OF THE CART
  function sumOfCart() {
    const priceDiv = document.querySelector('#divPrice')
    if (emptyArray.length > 0) {
      let sum = 0;
      for (const product of emptyArray) {
        sum += parseFloat(product.querySelector('td:nth-child(3)').textContent.replace(' €', ''));
      }
      console.log(sum.toFixed(2));
      return priceDiv.innerHTML= `TOTAL PRICE: € ${sum.toFixed(2)}
      <br>
      <button id="buttonContinueWithPayment" onClick="showFormToPay()">CONTINUE WITH PAYMENT</button>`
    }
    return 0;
  }

//SHOWING THE FORM TO SIGN TO DO THE PAYMENT
  function showFormToPay(){
    const showTheForm = document.getElementById("containerFormCostumer");
    showTheForm.style.display='block';
  }

  function decidePayment(){
    const paypal = document.querySelector('input[name="CpagamentoPaypal"]')
    const visa = document.querySelector('input[name="CpagamentoVisa"]')
    if(paypal.checked){
      showModal('ppl')
    }else if(visa.checked){
      showModal('vs')
    }
  }

function showModal(paymentMethod){
  if(paymentMethod==='ppl'){
    const modalPaypal = document.getElementById('modalForPaymentPaypal')
    modalPaypal.style.display='block'
  }else if(paymentMethod==='vs'){
    const modalVisa = document.getElementById('modalForPaymentVisa')
    modalVisa.style.display='block'
  }

}