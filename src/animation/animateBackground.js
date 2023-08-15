import MovingSquares from "./MovingSquares";
import Balls from "./Balls";

let animationType = "circle";
let started = false;

// Animation activities
let balls = null;
let squares = null;

const animateBackground = (element, theme, _, requestRef) => {

    const context = element.getContext("2d");
    const width = element.width;
    const height = element.height;

    if (!started) {
        balls = new Balls(context, element.width, element.height);
        balls.init();

        squares = new MovingSquares(context, element.width, element.height);
        squares.init();

        started = true;
    }

    // Update theme
    balls.updateTheme(theme);
    squares.updateTheme(theme);

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Readjust canvas size
    if (element.width !== element.clientWidth || element.height !== element.clientHeight) {
        element.width = element.clientWidth;
        element.height = element.clientHeight;
    }

    balls.draw();
    //squares.draw();

    // Call next animate frame
    requestRef.current = requestAnimationFrame((time) => {
        animateBackground(element, theme, time, requestRef);
    })
}

export default animateBackground;