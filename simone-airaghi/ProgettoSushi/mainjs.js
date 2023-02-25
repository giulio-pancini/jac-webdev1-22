<script>
        
        const button1 = document.getElementById("button1");
        const button2 = document.getElementById("button2");
        const button3 = document.getElementById("button3");
        
        button1.addEventListener("click", function () {
            window.scroll({
                top: 50,
                left: 0,
                behavior: "smooth"
            });
        });

        button2.addEventListener("click", function () {
            window.scroll({
                top: 500,
                left: 0,
                behavior: "smooth"
            });
        });

        button3.addEventListener("click", function () {
            window.scroll({
                top: 800,
                left: 0,
                behavior: "smooth"
            });
        });

        function toggle(){
            const home = document.getElementById('home');
            const divRiepilogo = document.getElementById('riepilogo');

            home.style.display = 'none';
            divRiepilogo.style.display = 'block';

           
        }

        function toggleHome(){
          
            const home = document.getElementById('home');
            const divRiepilogo = document.getElementById('riepilogo');
          
            home.style.display = 'block';
            divRiepilogo.style.display = 'none';

        }


       /* function aggiugniNigiriSalmon(nome, prezzo, type){
            const addNigiri = document.createElement("p");
            const elementoDesc = document.getElementById("desc");
            const elementoPrez = document.getElementById("prez");
            const elementoQta = document.getElementById("qta");
            elementoDesc.innerText = nome;
            elementoPrez.innerText = prezzo;
            elementoQta.innerText = mappa.get(type);
            

            
        }*/

          function aggiugniSushi(nome, prezzo){
            const addNigiri = document.createElement("p");
            const elementoDesc = document.getElementById("desc");
            const elementoPrez = document.getElementById("prez");
            const elementoQta = document.getElementById("qta")
            elementoDesc.innerText = nome;
            elementoPrez.innerText = prezzo;
            elementoQta.innerText = mappa.get();
            
            
            

            
        }
        
        function aggiungiNigiriTonno(){

        }

        function aggiungiNigiriGambero(){

        }

        
        function rimuoviElementi(){
        
        }
        function alert(){
             
        }
        
        const mappa = new Map;
        
        
        

            

        

        
    </script>