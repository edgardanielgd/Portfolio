import AnimationActivity from "../AnimationActivity";
import Ball from "./Ball";

const num_balls = 25;

class Balls extends AnimationActivity {
    init() {
        super.init();
        this.balls = [];
        for (let i = 0; i < num_balls; i++) {
            this.balls.push(new Ball(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 30 + 10,
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
        for (const ball of this.balls) {
            ball.update(this.width, this.height);
            ball.draw(this.context);
        }
    }

    updateTheme(theme) {
        super.updateTheme(theme);
        for (const ball of this.balls) {
            ball.color = this.theme === "dark" ? "#999696" : "#77c95d";
        }
    }
}

export default Balls;