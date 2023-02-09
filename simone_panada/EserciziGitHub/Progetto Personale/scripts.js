const y = document.getElementById("inpDicesNumber").value;
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

const button = document.getElementById("RollIt");
button.addEventListener("click", function(event) {
   event.preventDefault();
   const diceRolled = document.getElementById("inpDice").value;
   const diceNumber = document.getElementById("inpDicesNumber").value;
   let finalResult = generateRoll(diceRolled, diceNumber);
   CreateNewRollSection(finalResult);
});
