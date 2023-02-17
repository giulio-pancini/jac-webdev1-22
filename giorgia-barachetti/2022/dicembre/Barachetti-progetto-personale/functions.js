/*
adtocart
getOrder
orderList

*/

//nascondi e vedi carrello
function seeCart(){
    const site = document.getElementById('siteBody')
    const sectionUser = document.getElementById('userForm');
    site.style.display ='none';
    sectionUser.style.display ='block';
}

function hideCart(){
    const site = document.getElementById('siteBody')
    const sectionUser = document.getElementById('userForm');
    site.style.display ='block';
    sectionUser.style.display ='none';
}

function addToCart(){
        const saddleBought = document.createElement("section");
        const sectionCart = document.getElementById("sectionCart"); //qua è dove piazzo il mio elemento
        sectionCart.appendChild(saddleBought);

        const singleSaddleBought = document.createElement('objects')




}
//modifica e fai funzione
function user(){
           const dl = document.getElementById("dl")
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

            //spazio fra name e surname 
            //

/*
          dt.innerText ='Name: ' + Cname.value + 'Surname: '+ Csurname.value +'\nAddress:'+ Caddress.value +'\nMail:'+Cmail.value + '\Phone number:' +Cphone.value;
          
         
          dd6.innerText=Cpagamento;    
          //doest print the condition
          dd7.innerText = cond;   
          */            
         
        }
