export const initBuffers = (gl, initialValues, ArrayTypes = null) => {
    const buffers = [];

    if (ArrayTypes === null) {
        ArrayTypes = initialValues.map(_ => Float32Array);
    }

    if (initialValues.length !== ArrayTypes.length) {
        throw new Error('initialValues and ArrayTypes must be the same length');
    }

    for (let i = 0; i < initialValues.length; i++) {
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new ArrayTypes[i](initialValues[i]),
            gl.STATIC_DRAW
        );

        buffers.push(buffer);
    }

    return buffers;
}