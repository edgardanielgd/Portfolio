import MovingSquares from "./MovingSquares";
import Balls from "./Balls";
import Gears from "./SpinningMachines";

let animationType = "circles";
let started = false;

// Animation activities
let balls = null;
let squares = null;
let gears = null;

const animateBackground = (element, theme, time, requestRef) => {

    const context = element.getContext("2d");
    const width = element.width;
    const height = element.height;

    if (!started) {
        balls = new Balls(context, element.width, element.height);
        balls.init();

        squares = new MovingSquares(context, element.width, element.height);
        squares.init();

        gears = new Gears(context, element.width, element.height);
        gears.init();

        started = true;
    } else {
        // Update animations canvas size
        balls.updateSize(width, height);
        squares.updateSize(width, height);
        gears.updateSize(width, height);
    }

    // Update theme
    balls.updateTheme(theme);
    squares.updateTheme(theme);
    gears.updateTheme(theme);

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Readjust canvas size
    if (element.width !== element.clientWidth || element.height !== element.clientHeight) {
        element.width = element.clientWidth;
        element.height = element.clientHeight;
    }

    switch (animationType) {
        case "circles":
            balls.draw();
            break;
        case "squares":
            squares.draw();
            break;
        case "gears":
            gears.draw();
            break;
        default:
            break;
    }

    // Call next animate frame
    requestRef.current = requestAnimationFrame((time) => {
        animateBackground(element, theme, time, requestRef);
    })
}

const keyPressHandler = (event) => {

    // Check if animation type should be changed
    if (event.key === "e") {
        if (animationType === "circles") {
            animationType = "squares";
        } else if (animationType === "squares") {
            animationType = "gears";
        } else {
            animationType = "circles";
        }
    }

    if (balls && squares) {
        balls.onKeyPressed(event.key);
        squares.onKeyPressed(event.key);
    }
}

const mouseMovedHandler = (event) => {
    if (balls && squares) {
        balls.onMouseMoved(event.clientX, event.clientY);
        squares.onMouseMoved(event.clientX, event.clientY);
    }
}

const animationPkg = {
    animateBackground,
    keyPressHandler,
    mouseMovedHandler
}

export default animationPkg;