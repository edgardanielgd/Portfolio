class Square {
    constructor(
        x_initial, y_initial, side_initial, color_initial,
        x_velocity_initial, y_velocity_initial
    ) {
        this.x = x_initial;
        this.y = y_initial;
        this.side = side_initial;
        this.color = color_initial;

        this.x_velocity = x_velocity_initial;
        this.y_velocity = y_velocity_initial;
    }

    draw = (context) => {
        context.beginPath();
        context.rect(this.x, this.y, this.side, this.side);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    update = (width, height) => {
        // Check if the ball is out of bounds
        if (this.x + this.side > width || this.x - this.side < 0) {
            this.x_velocity = -this.x_velocity;
        }

        if (this.y + this.side > height || this.y - this.side < 0) {
            this.y_velocity = -this.y_velocity;
        }

        // Update the position
        this.x += this.x_velocity;
        this.y += this.y_velocity;
    }
}

export default Square;