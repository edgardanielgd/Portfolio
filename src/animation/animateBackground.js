import Balls from "./animators/Balls";
import Sphere from "./animators/Sphere";
import actualMod from "../utils/actualMod";
import { config as themeConfig } from "../utils/updateTheme";
import p5 from "p5";
import config from "../config";

const animators = [
    new Sphere(),
    new Balls(),
]

const CONTEXT_TYPE = "webgl"

let currentAnimatorIndex = 1;

let P5 = null;
let targetCanvas = null;
let targetCanvasP5 = null;
let started = false;
let currentTheme = "light";

const getParentSize = () => {
    const parent = document.getElementById(config.ANIMATION_CONTAINER_ID);
    const { top } = parent.getBoundingClientRect();

    const scrollY = window.scrollY;
    const canvasOffsetTop = (top >= 0) ? top : scrollY;

    return {
        width: Math.min(window.innerWidth, parent.clientWidth),
        height: Math.min(window.innerHeight, parent.clientHeight),
        pHeight: parent.clientHeight,
        top: canvasOffsetTop
    }
}

const s = (sk) => {

    const updateCanvasSize = () => {
        const { width, height, top, pHeight } = getParentSize();
        sk.resizeCanvas(width, height);

        // Update animations canvas size
        animators.forEach(animation => {
            animation.updateSize(
                width, height
            );
        })

        // Check if canvas will go out of the screen
        const limitY = top + height;
        if (limitY < pHeight)
            targetCanvasP5.position(0, top)
        else
            targetCanvasP5.position(0, top - (limitY - pHeight));
    }

    animators.forEach(animation => {
        animation.setSketch(sk);
    });

    sk.setup = () => {
        const renderer = CONTEXT_TYPE === "2d" ? sk.P2D : sk.WEBGL;
        targetCanvasP5 = sk.createCanvas(1, 1, renderer, targetCanvas);
        updateCanvasSize();

        animators.forEach(animation => {
            animation.onSetup();
        });
    }

    sk.draw = () => {
        updateCanvasSize();
        const backgroundColor = themeConfig["--portfolio-background-color"][currentTheme];
        sk.background(backgroundColor);

        const animationColor = themeConfig["animation-color"][currentTheme];
        animators[currentAnimatorIndex].draw(animationColor);
    }

    sk.keyPressed = () => {
        if (sk.key === "e") {
            currentAnimatorIndex = actualMod(currentAnimatorIndex + 1, animators.length);
        } else if (sk.key === "q") {
            currentAnimatorIndex = actualMod(currentAnimatorIndex - 1, animators.length);
        }

        if (started) {
            animators[currentAnimatorIndex].onKeyPressed(sk.key);
        }
    }

    sk.mouseMoved = () => {
        // Transit between animations
        if (started) {
            animators[currentAnimatorIndex].onMouseMoved(sk.mouseX, sk.mouseY);
        }
    }
}

// document.addEventListener("scroll", () => {
//     if (P5) {
//         P5.windowResized();
//     }
// })


export const handleTheneChange = (theme) => {
    currentTheme = theme;
}

export const initializeAnimation = (canvas) => {

    // Start the persistent animation loop
    targetCanvas = canvas;

    if (P5) {
        P5.remove();
    }

    P5 = new p5(s);

    if (!started) {
        started = true;

        const { width, height } = getParentSize();

        animators.forEach(animation => {
            animation.updateSize(
                width, height
            );
            animation.init();
        });
    }

}