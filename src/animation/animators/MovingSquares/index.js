import AnimationActivity from "../AnimationActivity";
import Square from "./Square";

const num_balls = 10;

class MovingSquares extends AnimationActivity {
    init(context, width, height) {
        super.init(context, width, height);

        this.squares = [];
        for (let i = 0; i < num_balls; i++) {
            this.squares.push(new Square(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 50 + 10,
                this.theme === "dark" ? "#999696" : "#77c95d",
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
            ))
        }
        this.draw();
    }

    reset() {
        this.init();
    }

    draw() {
        for (const ball of this.squares) {
            ball.update(this.width, this.height);
            ball.draw(this.context);
        }
    }

    updateTheme(theme) {
        super.updateTheme(theme);
        for (const ball of this.squares) {
            ball.color = this.theme === "dark" ? "#999696" : "#77c95d";
        }
    }
}

export default MovingSquares;