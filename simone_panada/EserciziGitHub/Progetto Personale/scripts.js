function generateRoll() {
   const x = document.getElementById("inpDice").value;
   let randomNumber = Math.floor(Math.random() * x) + 1;
   CreateNewRollSection(randomNumber);
}

function CreateNewRollSection(randomNumber) {
   const ul = document.getElementById("DiceRolls");
   const li = document.createElement("li");
   const writtenName = document.createElement("p");
   const dices = document.createElement("p");
   const result = document.createElement("p");
   ul.appendChild(li);
   li.appendChild(writtenName);
   li.appendChild(dices);
   li.appendChild(result);

   const name = document.getElementById("inpName");
   const diceRolled = document.getElementById("inpDice");
   const diceNumber = document.getElementById("inpDicesNumber");

   writtenName.innerText = "Name: " + name.value;
   dices.innerText = "Dices Rolled: " + diceNumber.value + "D"+ diceRolled.value;
   result.innerHTML = "Result:" + randomNumber;
}


const button = document.getElementById("RollIt");
button.addEventListener("click", function(event) {
   event.preventDefault();
   generateRoll();
});
