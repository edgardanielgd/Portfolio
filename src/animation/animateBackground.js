import MovingSquares from "./animators/MovingSquares";
import Balls from "./animators/Balls";
import Gears from "./animators/SpinningMachines";
import Sphere from "./animators/Sphere";
import actualMod from "../utils/actualMod";
import { config as themeConfig } from "../utils/updateTheme";
import { hex2rgb } from "../utils/hexToRGB";

const animators = [
    // new Sphere(),
    new Balls(),
    // new MovingSquares("2d"),
    // new Gears("2d"),
]

let currentAnimatorIndex = 0;
let started = false;

const CONTEXT_TYPE = "2d"

const animateBackground = (element, theme, time, requestRef) => {

    //const context = element.getContext("experimental-webgl") || element.getContext("webgl");
    const context = CONTEXT_TYPE == "2d" ?
        element.getContext("2d") :
        element.getContext("webgl") || element.getContext("experimental-webgl");

    const width = element.width;
    const height = element.height;

    if (!started) {
        animators.forEach(animation => {
            animation.init(
                context, width, height
            );
        })

        started = true;
    } else {
        // Update animations canvas size
        animators.forEach(animation => {
            animation.updateSize(
                width, height
            );
        })
    }

    // Update theme
    animators.forEach(animation => {
        animation.updateTheme(theme);
    })

    // Clear the canvas
    if (CONTEXT_TYPE == "2d") {
        context.clearRect(0, 0, width, height);
    } else {
        const backgroundColor = themeConfig["--portfolio-background-color"][theme];
        const [r, g, b] = hex2rgb(backgroundColor);
        context.clearColor(
            r / 255, g / 255, b / 255, 1.0
        );
        context.clear(context.COLOR_BUFFER_BIT);
    }

    // Readjust canvas size
    if (element.width !== element.clientWidth || element.height !== element.clientHeight) {
        element.width = element.clientWidth;
        element.height = element.clientHeight;
    }

    animators[currentAnimatorIndex].draw();

    // Call next animate frame
    requestRef.current = requestAnimationFrame((time) => {
        animateBackground(element, theme, time, requestRef);
    })
}

const keyPressHandler = (event) => {

    // Check if animation type should be changed
    if (event.key === "e") {
        currentAnimatorIndex = actualMod(currentAnimatorIndex + 1, animators.length);
    } else if (event.key === "q") {
        currentAnimatorIndex = actualMod(currentAnimatorIndex - 1, animators.length);
    }

    // Call key press handler for current animation
    animators[currentAnimatorIndex].onKeyPressed(event.key);
}

const mouseMovedHandler = (event) => {
    animators[currentAnimatorIndex].onMouseMoved(event.clientX, event.clientY);
}

const animationPkg = {
    animateBackground,
    keyPressHandler,
    mouseMovedHandler
}

export default animationPkg;