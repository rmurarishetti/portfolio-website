export function v_ab(a, b) {
    let v_ab = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        v_ab[i] = b[i] - a[i];
    };
    return v_ab
}

export function coeff(n, v) {
    let res = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        res[i] = v[i] * n;
    };
    return res
}

export function add(a, b) {
    let res = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        res[i] += b[i] + a[i];
    };
    return res
}

export function mag(v) {
    const [x, y, z] = v;
    return Math.sqrt(x ** 2 + y ** 2 + z ** 2)
}

export function unit(v) {
    const magnitude = mag(v);
    return coeff(1 / magnitude, v);
}
export function dot(a, b) {
    let dot = 0;
    for (let i = 0; i < 3; i++) {
        dot += b[i] * a[i];
    };
    return dot
}

export function angleBetween(v1, v2) {
    return Math.acos(dot(v1, v2) / (mag(v1) * mag(v2)))
}

export function distanceBetween(v1, v2) {
    return mag(v_ab(v1, v2));
}