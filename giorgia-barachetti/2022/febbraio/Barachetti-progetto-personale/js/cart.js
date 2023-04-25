const products = [
  //JUMPING  
    {
      id: 1,
      image:'',
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
    const cart = document.querySelector('#cart ul');
    
    const cartItem = document.createElement('li');
    //creo la section del carrello che sarà visualizzata nel cart
    cartItem.innerHTML = `
      <div id="productsInTheCart">      
        <span>${product.name}</span>
        <span>${product.description}</span>
        <span>${product.price} €</span>
      </div>
      `;
    
    cart.appendChild(cartItem);
    alert('Product added in the cart')
    emptyArray.push(cartItem);
    console.log(emptyArray);
    
    if(!emptyArray.isEmpty){
      for(prodotto of emptyArray){
        const sum =+ prodotto.price;
        console.log(sum)
      }
    }
  }
  