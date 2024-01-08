import AnimationActivity from "../AnimationActivity";
import Ball from "./Ball";

const num_balls = 25;

class Balls extends AnimationActivity {

    init() {
        super.init();

        this.balls = [];
        for (let i = 0; i < num_balls; i++) {
            this.balls.push(new Ball(
                Math.random() * this.width - this.width / 2,
                Math.random() * this.height - this.height / 2,
                Math.random() * 30 + 10,
                this.animationColor,
                Math.random() * 6 - 3,
                Math.random() * 6 - 3
            ))
        }
    }

    reset() {
        this.init();
    }

    draw(animationColor) {
        for (const ball of this.balls) {
            ball.update(this.width, this.height);
            ball.draw(this.sk, animationColor);
        }
    }

    onKeyPressed = (key) => {
        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            for (const ball of this.balls) {
                ball.onKeyPressed(key);
            }
        }
    }
}

export default Balls;