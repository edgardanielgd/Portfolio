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
}

export default AnimationActivity;