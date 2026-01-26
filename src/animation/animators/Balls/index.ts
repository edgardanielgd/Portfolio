import AnimationActivity from "../AnimationActivity";
import Ball from "./Ball";

const num_balls = 1;

class Balls extends AnimationActivity {
    private balls: Ball[] = [];

    init(): void {
        super.init();

        this.balls = [];
        for (let i = 0; i < num_balls; i++) {
            this.balls.push(new Ball(
                0 * this.width - this.width / 2,
                0 * this.height - this.height / 2,
                Math.random() * 30 + 10,
                "",
                Math.random() * 6 - 3,
                Math.random() * 6 - 3
            ))
        }
    }

    reset(): void {
        this.init();
    }

    draw(animationColor: string): void {
        for (const ball of this.balls) {
            ball.update(this.width, this.height);
            ball.draw(this.sk!, animationColor);
        }
    }

    onKeyPressed = (key: string): void => {
        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            for (const ball of this.balls) {
                ball.onKeyPressed(key);
            }
        }
    }
}

export default Balls;

