class AnimationActivity {

    constructor() {

        this.sk = null;
        this.width = 0;
        this.height = 0;

        this.initialized = false;
    }

    onSetup() {
        // Callend of p5's setup function
    }

    init() {
        this.initialized = true;
    }

    setSketch(sk) {
        this.sk = sk;
    }

    reset() { }

    draw(animationColor) { }

    updateSize(width, height) {
        this.width = width;
        this.height = height;
    }

    onKeyPressed(key) { }

    onMouseMoved(x, y) { }
}

export default AnimationActivity;