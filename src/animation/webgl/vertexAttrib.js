export const setVertexAttrib = (
    gl,
    buffer,
    target,
    type,
    nComponents = 2,
    normalize = false,
    stride = 0,
    offset = 0,

) => {
    gl.bindBuffer(
        gl.ARRAY_BUFFER,
        buffer
    );
    gl.vertexAttribPointer(
        target,
        nComponents,
        type,
        normalize,
        stride,
        offset,
    );
    gl.enableVertexAttribArray(target);
}
