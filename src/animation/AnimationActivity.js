class AnimationActivity {
    constructor(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.initialized = false;
    }

    reset() { }

    init() {
        this.initialized = true;
    }

    draw() { }

    updateTheme(theme) {
        this.theme = theme;
    }

    updateSize(width, height) {
        this.width = width;
        this.height = height;
    }

    onKeyPressed(key) { }

    onMouseMoved(x, y) { }
}

export default AnimationActivity;