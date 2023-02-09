const button = document.getElementById("RollIt");
button.addEventListener("click", CreateNewRollSection());

function CreateNewRollSection() 
{
   const ul = document.getElementById("DiceRolls");
   const li = document.createElement("li");
   const writtenName = document.createElement("p");
   const dices = document.createElement("p");
   ul.appendChild(li);
   li.appendChild(writtenName);
   li.appendChild(dices);
   const name = document.getElementById("inpName");
   const dicesRolled = document.getElementById("inpDice");
   writtenName.innerText = "Name: " + name.value;
   dices.innerText = "Dice Rolled: " + dicesRolled.value; 
}
