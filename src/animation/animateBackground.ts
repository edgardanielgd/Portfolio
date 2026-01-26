import actualMod from "../utils/actualMod";
import { config as themeConfig } from "../utils/updateTheme";
import p5 from "p5";
import config from "../config";
import AnimationActivity from "./animators/AnimationActivity";
import MouseDrop from "./animators/MouseDrop";

const animators: AnimationActivity[] = [
    new MouseDrop(),
]

type ContextType = "webgl" | "2d";
const CONTEXT_TYPE: ContextType = "webgl";

let currentAnimatorIndex: number = 0;

let P5: p5 | null = null;
let targetCanvas: HTMLCanvasElement | null = null;
let targetCanvasP5: p5.Element | null = null;
let camera: p5.Camera | null = null;
let started: boolean = false;
let currentTheme: string = "light";

interface ParentSize {
    width: number;
    height: number;
    pHeight: number;
    top: number;
}

const getParentSize = (): ParentSize => {
    const parent = document.getElementById(config.ANIMATION_CONTAINER_ID);
    if (!parent) {
        return { width: 0, height: 0, pHeight: 0, top: 0 };
    }
    
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

const s = (sk: p5): void => {

    const updateCanvasSize = (): void => {
        const { width, height, top, pHeight } = getParentSize();
        sk.resizeCanvas(width, height);

        animators.forEach(animation => {
            animation.updateSize(
                width, height
            );
        })

        const limitY = top + height;
        if (limitY < pHeight && targetCanvasP5) {
            targetCanvasP5.position(0, top);
        } else if (targetCanvasP5) {
            targetCanvasP5.position(0, top - (limitY - pHeight));
        }
    }

    animators.forEach(animation => {
        animation.setSketch(sk);
    });

    sk.setup = () => {
        const renderer: typeof sk.P2D | typeof sk.WEBGL = (CONTEXT_TYPE as string) === "2d" ? sk.P2D : sk.WEBGL;
        if (targetCanvas) {
            sk.pixelDensity(1);
            targetCanvasP5 = sk.createCanvas(1, 1, renderer, targetCanvas);
            camera = sk.createCamera();
        }
        
        updateCanvasSize();

        animators.forEach(animation => {
            animation.onSetup();
        });
    }

    sk.draw = () => {
        updateCanvasSize();
        const backgroundColor = themeConfig["--portfolio-background-color"][currentTheme as "light" | "dark"];
        sk.background(backgroundColor);

        const animationColor = themeConfig["--portfolio-animation-color"][currentTheme as "light" | "dark"];
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

    sk.mousePressed = () => {
        if (started) {
            animators[currentAnimatorIndex].onMousePressed(sk.mouseX, sk.mouseY);
        }
    }

    sk.mouseDragged = () => {
        if (started) {
            animators[currentAnimatorIndex].onMoudeDragged(sk.mouseX, sk.mouseY);
        }
    }
}


export const handleTheneChange = (theme: string): void => {
    currentTheme = theme;
}

export const initializeAnimation = (canvas: HTMLCanvasElement | null): void => {

    // Start the persistent animation loop
    targetCanvas = canvas;

    if (P5) {
        P5.remove();
    }

    if (canvas) {
        P5 = new p5(s);
    }

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

