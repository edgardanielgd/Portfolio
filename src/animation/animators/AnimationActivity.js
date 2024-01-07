import { hex2rgb } from "../../utils/hexToRGB";
import { config as themeConfig } from "../../utils/updateTheme";

class AnimationActivity {

    constructor() {
        this.initialized = false;
        this.animationColor = themeConfig["animation-color"]["light"];
        this.animationColorRGB = hex2rgb(this.animationColor);
    }

    init(context, width, height) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.initialized = true;
    }

    reset() { }

    draw() { }

    updateTheme(theme) {
        this.theme = theme;
        this.animationColor = themeConfig["animation-color"][theme];
        this.animationColorRGB = hex2rgb(this.animationColor);
    }

    updateSize(width, height) {
        this.width = width;
        this.height = height;
    }

    onKeyPressed(key) { }

    onMouseMoved(x, y) { }
}

export default AnimationActivity;