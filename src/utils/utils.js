function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
}

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    console.log(gl.getProgramInfoLog(program));
}

function fastCreateProgram(gl, vertexId, fragmentId) {
    const vertexSource = document.getElementById(vertexId).innerText;
    const fragmentSource = document.getElementById(fragmentId).innerText;
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    return createProgram(gl, vertexShader, fragmentShader);
}

function randomColor() {
    return {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
        a: 0.5 * Math.random() + 0.5,
    }
}
