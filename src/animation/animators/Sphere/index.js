import AnimationActivity from "../AnimationActivity";
import { vertShader } from "./vertShader";
import { fragShader } from "./fragShader";
import { initShaderProgram } from "../../webgl/initShaders"
import { initBuffers } from "../../webgl/initBuffer";
import { setVertexAttrib } from "../../webgl/vertexAttrib";
import { mat4 } from "gl-matrix";

class Sphere extends AnimationActivity {

    init(context, width, height) {
        super.init(context, width, height);

        const shaderProgram = initShaderProgram(context, vertShader, fragShader);

        this.programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: context.getAttribLocation(shaderProgram, "aVertexPosition"),
            },
            uniformLocations: {
                projectionMatrix: context.getUniformLocation(shaderProgram, "uProjectionMatrix"),
                modelViewMatrix: context.getUniformLocation(shaderProgram, "uModelViewMatrix"),
            },
        };

        this.buffers = initBuffers(context, [
            [0.0, 0.0, -1.0, 1.0, 0.0, 0.0, -1.0, -1.0]
        ]);
    }

    reset() {
        this.init();
    }

    draw() {

        this.context.clearDepth(1.0); // Clear everything
        this.context.enable(this.context.DEPTH_TEST); // Enable depth testing
        this.context.depthFunc(this.context.LEQUAL); // Near things obscure far things

        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);

        const fieldOfView = (45 * Math.PI) / 180; // in radians
        const aspect = this.context.canvas.clientWidth / this.context.canvas.clientHeight;
        const zNear = 0.1;
        const zFar = 100.0;
        const projectionMatrix = mat4.create();

        mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

        const modelViewMatrix = mat4.create();

        mat4.translate(
            modelViewMatrix, // destination matrix
            modelViewMatrix, // matrix to translate
            [0.0, 0.0, -1.0],
        );

        setVertexAttrib(
            this.context, this.buffers[0],
            this.programInfo.attribLocations.vertexPosition,
            this.context.FLOAT,
            2, false, 0, 0
        )

        this.context.useProgram(this.programInfo.program);

        this.context.uniformMatrix4fv(
            this.programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix,
        );

        this.context.uniformMatrix4fv(
            this.programInfo.uniformLocations.modelViewMatrix,
            false,
            modelViewMatrix,
        );

        {
            const offset = 0;
            const vertexCount = 4;
            this.context.drawArrays(
                this.context.TRIANGLE_STRIP, offset, vertexCount
            );
        }


    }

    updateTheme(theme) {
        super.updateTheme(theme);
    }

    onKeyPressed = (key) => {

    }
}

export default Sphere;