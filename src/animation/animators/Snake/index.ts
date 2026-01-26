import p5 from "p5";
import AnimationActivity from "../AnimationActivity";
import Snake from "./Snake";

const SNAKE_SPEED = 10;

class SnakeActivity extends AnimationActivity {

    private snakePos: p5.Vector = new p5.Vector(0, 0, 0);
    private snakeVel: p5.Vector = new p5.Vector(0, 0, 0);
    private camera: p5.Camera | null = null;
    private cameraPos: p5.Vector = new p5.Vector(0, 0, 800);
    private snake: Snake = new Snake(10, SNAKE_SPEED);

    init(): void {
        super.init();
    }

    onSetup(): void {
        if (!this.sk) return;
        
        this.camera = this.sk.createCamera();
        this.camera.setPosition(this.cameraPos.x, this.cameraPos.y, this.cameraPos.z);
        this.camera.lookAt(0, 0, 0);
    }

    reset(): void {
        this.init();
    }

    draw(animationColor: string): void {
        this.snake.update(this.width, this.height);
        this.snake.draw(this.sk!, animationColor);
    }

    onKeyPressed = (key: string): void => {
        this.snake.onKeyPressed(key);
    }
}

export default SnakeActivity;

