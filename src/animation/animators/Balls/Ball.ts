import p5 from "p5";

class Ball {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private x_velocity: number;
    private y_velocity: number;

    constructor(
        x_initial: number, 
        y_initial: number, 
        radius_initial: number, 
        color_initial: string,
        x_velocity_initial: number, 
        y_velocity_initial: number
    ) {
        this.x = x_initial;
        this.y = y_initial;
        this.radius = radius_initial;
        this.color = color_initial;
        this.x_velocity = x_velocity_initial;
        this.y_velocity = y_velocity_initial;
    }

    draw = (sk: p5, color: string): void => {
        sk.push();
        sk.fill(color);
        sk.noStroke();
        sk.translate(this.x, this.y, 0);
        sk.ellipsoid(this.radius, this.radius, this.radius);
        sk.pop();
    }

    update = (width: number, height: number): void => {
        if (this.x + this.radius > width / 2 || this.x - this.radius < -width / 2) {
            this.x_velocity = -this.x_velocity * 0.95;
        }

        if (this.y + this.radius > height / 2 || this.y - this.radius < -height / 2) {
            this.y_velocity = -this.y_velocity * 0.95;
        }

        this.x += this.x_velocity;
        this.y += this.y_velocity;
    }

    onKeyPressed = (direction: string): void => {
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

