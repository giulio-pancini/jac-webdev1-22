var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var pacman = {
	x: canvas.width / 2,
	y: canvas.height / 2,
	radius: 20,
	speed: 5,
	direction: 0,
	color: "yellow"
};

var ghosts = [
	{
		x: 100,
		y: 100,
		radius: 20,
		speed: 3,
		direction: 0,
		color: "red"
	},
	{
		x: canvas.width - 100,
		y: canvas.height - 100,
		radius: 20,
		speed: 3,
		direction: Math.PI,
		color: "pink"
	}
];

var score = 0;

function clearCanvas() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPacman() {
	ctx.beginPath();
	ctx.arc(pacman.x, pacman.y, pacman.radius, pacman.direction + Math.PI / 7, pacman.direction - Math.PI / 7, false);
	ctx.lineTo(pacman.x, pacman.y);
	ctx.fillStyle = pacman.color;
	ctx.fill();
}

function drawGhost(ghost) {
	ctx.beginPath();
	ctx.arc(ghost.x, ghost.y, ghost.radius, 0, 2 * Math.PI);
	ctx.fillStyle = ghost.color;
	ctx.fill();
}

function movePacman() {
	if (37 in keysDown) { // Left arrow
		pacman.direction = Math.PI;
		pacman.x -= pacman.speed;
	}
	if (38 in keysDown) { // Up arrow
		pacman.direction = -Math.PI / 2;
		pacman.y -= pacman.speed;
	}
	if (39 in keysDown) { // Right arrow
		pacman.direction = 0;
		pacman.x += pacman.speed;
	}
	if (40 in keysDown) { // Down arrow
		pacman.direction = Math.PI / 2;
		pacman.y += pacman.speed;
	}
}

function moveGhost(ghost) {
	var dx = pacman.x - ghost.x;
	var dy = pacman.y - ghost.y;
	var angle = Math.atan2(dy, dx);
	ghost.direction = angle;
	ghost.x += ghost.speed * Math.cos(angle);
	ghost.y += ghost.speed * Math.sin(angle);
}

function drawScore() {
	ctx.fillStyle = "white";
	ctx.font = "24px Arial";
	ctx.textAlign = "right";
	ctx.fillText("Score: " + score, canvas.width - 20, 30);
}

function checkCollisions() {
	// Check collision with walls
	if (pacman.x - pacman.radius < 0 || pacman.x + pacman.radius > canvas.width) {
		resetGame();
	}
	if (pacman.y - pacman.radius < 0 || pacman.y + pacman.radius > canvas.height) {
		resetGame();
	}
	
