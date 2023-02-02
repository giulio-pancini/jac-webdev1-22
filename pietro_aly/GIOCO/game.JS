const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
let score = 0;

let enemyInterval = setInterval(function() {
  let x = Math.floor(Math.random() * 450);
  let y = Math.floor(Math.random() * 450);
  let enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.left = x + "px";
  enemy.style.top = y + "px";
  gameBoard.appendChild(enemy);
}, 1000);

document.addEventListener("click", function(event) {
  let x = event.clientX;
  let y = event.clientY;

  let bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  gameBoard.appendChild(bullet);

  let enemies = document.getElementsByClassName("enemy");
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    let enemyRect = enemy.getBoundingClientRect();

    if (x >= enemyRect.left && x <= enemyRect.right && y >= enemyRect.top && y <= enemyRect.bottom) {
      gameBoard.removeChild(enemy);
      score++;
      scoreDisplay.innerHTML = "Score: " + score;
    }
  }
});
