class Ball {
    constructor(
        x_initial, y_initial, radius_initial, color_initial,
        x_velocity_initial, y_velocity_initial
    ) {
        this.x = x_initial;
        this.y = y_initial;
        this.radius = radius_initial;
        this.color = color_initial;

        this.x_velocity = x_velocity_initial;
        this.y_velocity = y_velocity_initial;
    }

    draw = (context) => {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    update = (width, height) => {
        // Check if the ball is out of bounds
        if (this.x + this.radius > width || this.x - this.radius < 0) {
            this.x_velocity = -this.x_velocity * 0.95;
        }

        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.y_velocity = -this.y_velocity * 0.95;
        }

        // Update the position
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    }

    onKeyPressed = (direction) => {
        switch (direction) {
            case "ArrowUp":
                this.y_velocity -= 1;
                break;
            case "ArrowDown":
                this.y_velocity += 1;
                break;
            case "ArrowLeft":
                this.x_velocity -= 1;
                break;
            case "ArrowRight":
                this.x_velocity += 1;
                break;
            default:
                break;
        }
    }

}

export default Ball;