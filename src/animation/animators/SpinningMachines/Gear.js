class Square {
    constructor(
        x_initial, y_initial, radius_initial, color_initial,
        rotation_initial
    ) {
        this.x = x_initial;
        this.y = y_initial;
        this.side = radius_initial;
        this.color = color_initial;
        this.rotation = rotation_initial;
    }

    draw = (context) => {
        context.beginPath();

        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.fillStyle = this.color;
        context.arc(25, 25, this.side, 0, 2 * Math.PI);
        context.fill();

        // Draw a small rect to show the rotation
        context.fillStyle = "black";
        context.rect(50, 50, 5, 5);
        context.fill();
        context.restore();

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