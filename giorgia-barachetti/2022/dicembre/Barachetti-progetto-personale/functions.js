//nascondi e vedi carrello
function showCart(){
    const site = document.getElementById('mainPage')
    const sectionUser = document.getElementById('shoppingCart');
    site.style.display ='none';
    sectionUser.style.display ='block';
}

function showHome(){
    const site = document.getElementById('mainPage')
    const sectionUser = document.getElementById('shoppingCart');
    site.style.display ='block';
    sectionUser.style.display ='none';
}

function addToCart(){
        const saddleBought = document.createElement("section");
        const sectionCart = document.getElementById("sectionCart"); //qua è dove piazzo il mio elemento
        sectionCart.appendChild(saddleBought);

        const singleSaddleBought = document.createElement('objects');
        singleSaddleBought.appendChild(document.getElementById("h1"));
        
      
}

function user() {
  const dl = document.getElementById("dl");
  const dt = document.createElement("dt");
  dl.appendChild(dt);
  
  const inputs = ["name", "surname", "address", "mail", "phone"];
  const inputLabels = ["Name", "Surname", "Address", "Email", "Phone number"];
  
  for (let i = 0; i < inputs.length; i++) {
    const dd = document.createElement("dd");
    const label = document.createTextNode(inputLabels[i] + ": ");
    const inputValue = document.getElementById(inputs[i]).value;
    const value = document.createTextNode(inputValue);
    
    dd.appendChild(label);
    dd.appendChild(value);
    dt.appendChild(dd);

  }
  
  const Cpaypal = document.getElementById("paypal");
  const Cvisa = document.getElementById("visa");
  let Cpagamento = " ";
  
  if (Cpaypal.checked) {
    Cpagamento = "Pay with PayPal";
  } else if (Cvisa.checked) {
    Cpagamento = "Pay with Visa";
  }
  

  const Ccondiz = document.getElementById("cond");
  let cond = '';
  
  if (Ccondiz.checked) {
    cond = "Terms of Service and Privacy Policy approved.";
  } else {
    cond = "The Terms of Service and the Privacy Policy must be approved to continue!";
  }
  
  const paymentParagraph = document.createElement("p");
  const paymentText = document.createTextNode("Payment method: " + Cpagamento);
  paymentParagraph.appendChild(paymentText);
  dt.appendChild(paymentParagraph);
  
  const condizParagraph = document.createElement("p");
  const condizText = document.createTextNode(cond);
  condizParagraph.appendChild(condizText);
  dt.appendChild(condizParagraph);
}
    /*
    no function
    function user(){
        const dl = document.getElementById("dl");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        const dd2 = document.createElement("dd");
        const dd3 = document.createElement("dd");
        const dd4 = document.createElement("dd");
        const dd5 = document.createElement("dd");
        const dd6 = document.createElement("dd");
        const dd7 = document.createElement("dd");
        
        dl.appendChild(dt);
        
        dt.appendChild(dd);
        dt.appendChild(dd2);
        dt.appendChild(dd3);
        dt.appendChild(dd4);
        dt.appendChild(dd5);
        dt.appendChild(dd6);
        dt.appendChild(dd7);
        
        
        const Cname = document.getElementById("name");
        const Csurname = document.getElementById("surname");
        const Caddress = document.getElementById("address");
        const Cmail = document.getElementById("mail");
        const Cphone = document.getElementById("phone");
        
        const Cpaypal = document.getElementById("paypal");
        const Cvisa = document.getElementById("visa");
        
        let Cpagamento = " ";
        if (Cpaypal.checked){
            Cpagamento = 'Pay with PayPal';
        }else if (Cvisa.checked){
                Cpagamento = 'Pay with Visa';
            }
            
            const Ccondiz = document.getElementById("cond");
            let cond = '';
            if(Ccondiz.checked){
                cond = 'Terms of Service and Privacy Policy approved.'
            }else{
                cond = 'The Terms of Service and the Privacy Policy must be approved to continue!'
            }
            
            
            dt.innerText ='Name: ' + Cname.value + 'Surname: '+ Csurname.value +'\nAddress:'+ Caddress.value +'\nMail:'+Cmail.value + '\Phone number:' +Cphone.value;
            
            dd6.innerText=Cpagamento;    
            //doest print the condition
            dd7.innerText = cond;   
        }
        */            