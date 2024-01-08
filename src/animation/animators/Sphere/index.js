import AnimationActivity from "../AnimationActivity";
import { vertShader } from "./vertShader";
import { fragShader } from "./fragShader";
import { hex2rgb } from "./../../../utils/hexToRGB"

import p5 from "p5";

class Sphere extends AnimationActivity {

    init() {
        super.init();
    }

    onSetup() {
        this.camera = this.sk.createCamera();

        this.shader = new p5.Shader(
            this.sk._renderer, vertShader, fragShader
        );

        this.setCameraPosition(this.width, 0, 0);
    }

    setSketch(sk) {
        super.setSketch(sk);
    }

    reset() {
        this.init();
    }

    draw(animationColor) {
        this.sk.push();

        const [r, g, b] = hex2rgb(animationColor);
        this.shader.setUniform('uColor', [r / 255, g / 255, b / 255])

        this.sk.shader(this.shader);
        this.sk.stroke(animationColor)
        this.sk.sphere(this.width / 3)

        this.sk.pop();
    }

    onKeyPressed = (key) => {
        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
            for (const ball of this.balls) {
                ball.onKeyPressed(key);
            }
        }
    }

    setCameraPosition = (p, pi, phi) => {
        const x_camera = p * this.sk.sin(pi) * this.sk.cos(phi);
        const y_camera = p * this.sk.sin(pi) * this.sk.sin(phi);
        const z_camera = p * this.sk.cos(pi);

        this.camera.setPosition(x_camera, y_camera, z_camera);
        this.camera.lookAt(0, 0, 0);
    }

    onMouseMoved = (x, y) => {

        if (this.camera) {
            // Use Spherical coords to move the camera
            const radius = this.width;
            const pi = this.sk.map(y, 0, this.height, 0, 2 * this.sk.PI);
            const phi = this.sk.map(x, 0, this.width, 0, this.sk.PI);

            this.setCameraPosition(radius, pi, phi);
        }

    }
}

export default Sphere;