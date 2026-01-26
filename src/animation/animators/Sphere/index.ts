import AnimationActivity from "../AnimationActivity";
import { vertShader } from "./vertShader";
import { fragShader } from "./fragShader";
import { hex2rgb } from "./../../../utils/hexToRGB";

import p5 from "p5";

class Sphere extends AnimationActivity {
    private camera: p5.Camera | null = null;
    private shader: p5.Shader | null = null;

    init(): void {
        super.init();
    }

    onSetup(): void {
        if (!this.sk) return;
        
        this.camera = this.sk.createCamera();

        const renderer = (this.sk as any)._renderer;
        this.shader = new (p5.Shader as any)(
            renderer, vertShader, fragShader
        );

        this.setCameraPosition(this.width, 0, 0);
    }

    setSketch(sk: p5): void {
        super.setSketch(sk);
    }

    reset(): void {
        this.init();
    }

    draw(animationColor: string): void {
        if (!this.sk || !this.shader) return;
        
        this.sk.push();

        const [r, g, b] = hex2rgb(animationColor);
        this.shader.setUniform('uColor', [r / 255, g / 255, b / 255])

        this.sk.shader(this.shader);
        this.sk.stroke(animationColor)
        this.sk.sphere(this.width / 3)

        this.sk.pop();
    }

    onKeyPressed = (key: string): void => {
        // This method seems to have incorrect code (references this.balls which doesn't exist)
        // Keeping original behavior but it may need fixing
    }

    setCameraPosition = (p: number, pi: number, phi: number): void => {
        if (!this.sk || !this.camera) return;
        
        const x_camera = p * this.sk.sin(pi) * this.sk.cos(phi);
        const y_camera = p * this.sk.sin(pi) * this.sk.sin(phi);
        const z_camera = p * this.sk.cos(pi);

        this.camera.setPosition(x_camera, y_camera, z_camera);
        this.camera.lookAt(0, 0, 0);
    }

    onMouseMoved = (x: number, y: number): void => {
        if (!this.sk || !this.camera) return;

        // Use Spherical coords to move the camera
        const radius = this.width;
        const pi = this.sk.map(y, 0, this.height, 0, 2 * this.sk.PI);
        const phi = this.sk.map(x, 0, this.width, 0, this.sk.PI);

        this.setCameraPosition(radius, pi, phi);
    }
}

export default Sphere;

