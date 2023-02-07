function CreateNewRollSection() 
{
   const ul = document.getElementById("DiceRolls");
   const li = document.createElement("li");
   const writtenName = document.createElement("p");
   const dices = document.createElement("p");
   ul.appendChild(li);
   li.appendChild(p);
   const name = document.getElementById("inpName");
   const dicesRolled = document.getElementById("inpDice");
   writtenName.innerText = "Nome: " + name.value;
   dices.innerText = "Dice Rolled: "; //TODO
}

