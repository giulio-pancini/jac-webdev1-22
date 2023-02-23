class Snake {
    constructor(x, y) {
        this.body = [{x: x, y: y}];
        this.direction = 'right';
    }

    move() {
        let head = {x: this.body[0].x, y: this.body[0].y};

        switch (this.direction) {
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }

        this.body.unshift(head);
        this.body.pop();
    }

    eat(food) {
        if (this.body[0].x === food.x && this.body[0].y === food.y) {
            this.body.push(food);
            return true;
        }

        return false;
    }

    collides() {
        let head = this.body[0];

        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === head.x && this.body[i].y === head.y) {
                return true;
            }
        }

        return false;
    }

    setDirection(direction) {
        switch (direction) {
            case 'up':
                if (this.direction !== 'down') {
                    this.direction = 'up';
                }
                break;
            case 'down':
                if (this.direction !== 'up') {
                    this.direction = 'down';
                }
                break;
            case 'left':
                if (this.direction !== 'right') {
                    this.direction = 'left';
                }
                break;
            case 'right':
                if (this.direction !== 'left') {
                    this.direction = 'right';
                }
                break;
        }
    }
}

class Food {
    constructor() {
        this.x = Math.floor(Math.random() * 20) * 20;
        this.y = Math.floor(Math.random() * 20) * 20;
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.snake = new

