//crea la sezione della lista con al suo interno i tiri
function CreateNewRollSection(finalResult) {
   const ul = document.getElementById("DiceRolls");
   const li = document.createElement("li");
   const writtenName = document.createElement("p");
   const dices = document.createElement("p");
   const result = document.createElement("p");
   const sum = document.createElement("p");
   ul.appendChild(li);
   li.appendChild(writtenName);
   li.appendChild(dices);
   li.appendChild(result);
   li.appendChild(sum);
   const name = document.getElementById("inpName");
   const diceRolled = document.getElementById("inpDice").value;
   const diceNumber = document.getElementById("inpDicesNumber");
   writtenName.innerText = "Player: " + name.value;
   dices.innerText = "Dices Rolled: " + diceNumber.value + "D"+ diceRolled;
   result.innerHTML = "Result: " + finalResult[0].join(", ");
   sum.innerHTML = "Sum: " + finalResult[1];
}
//genera il lancio
function generateRoll(diceRolled, diceNumber) 
{
   let results = [];
   for (let i=0; i < diceNumber; i++) 
    {
    let randomNumber = Math.floor(Math.random() * diceRolled) + 1;
    results.push(randomNumber);
    }
   let sum = results.reduce((a, b) => a + b, 0);
   return [results, sum];
}

//interazioni con la pagina
const button = document.getElementById("RollIt");
var maxinput = document.getElementById("inpDicesNumber");
const arrayRisultati= [];
//avvia il lancio dei dadi quando si preme il bottone e controlla che il numero di dadi massimo sia nei limiti consentiti
button.addEventListener("click", function(event) 
{
   event.preventDefault();
   /*if (maxinput.value > 25) 
            {
               setCustomValidity("Max Value Allowed is 25");
               return;
            } else 
            {
               setCustomValidity("");
            }*/      
   const diceRolled = document.getElementById("inpDice").value;
   const diceNumber = document.getElementById("inpDicesNumber").value;
   let finalResult = generateRoll(diceRolled, diceNumber);
   arrayRisultati.push(finalResult);
   CreateNewRollSection(finalResult);
});
//creare funzione che prima di tutto svuota la UL e poi cicla su tutto l'array arrayRisultati e crea la sezione a destra