import p5 from "p5";

class AnimationActivity {

    protected sk: p5 | null = null;
    protected width: number = 0;
    protected height: number = 0;
    protected initialized: boolean = false;

    constructor() {
        this.sk = null;
        this.width = 0;
        this.height = 0;
        this.initialized = false;
    }

    onSetup(): void {
        // Called from p5's setup function
    }

    init(): void {
        this.initialized = true;
    }

    setSketch(sk: p5): void {
        this.sk = sk;
    }

    reset(): void { }

    draw(animationColor: string): void { }

    updateSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    onKeyPressed(key: string): void { }

    onMouseMoved(x: number, y: number): void { }

    onMousePressed(x: number, y: number): void { }

    onMoudeDragged(x: number, y: number): void { }
}

export default AnimationActivity;

