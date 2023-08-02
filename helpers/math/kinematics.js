import * as THREE from 'three';

// Declare constants to minimse object creation
const MAT4 = new THREE.Matrix4();
const MAT3 = new THREE.Matrix3();
const VEC3 = new THREE.Vector3();
const EULER = new THREE.Euler();

function getAdjTMat4(dhParam) {
    const [a, alpha, d, theta] = dhParam;
    const [ca, sa] = [Math.cos(alpha), Math.sin(alpha)];
    const [ct, st] = [Math.cos(theta), Math.sin(theta)];

    // Directly set values into the matrix without creating a new instance each time
    MAT4.set(
        ct, -st, 0, a,
        st * ca, ct * ca, -sa, -d * sa,
        st * sa, ct * sa, ca, d * ca,
        0, 0, 0, 1
    );

    return MAT4.clone();
}

export const getAbsTMat4s = (dhParams) => {
    const absTMat4s = [getAdjTMat4(dhParams[0])];

    for (let i = 1; i < dhParams.length; i++) {
        const newMatrix = MAT4.multiplyMatrices(absTMat4s[i - 1], getAdjTMat4(dhParams[i]));
        absTMat4s.push(newMatrix.clone());
    }

    return absTMat4s;
};

export function mat4ToArray(mat4) {
    return [
        [mat4.elements[0], mat4.elements[1], mat4.elements[2], mat4.elements[3]],
        [mat4.elements[4], mat4.elements[5], mat4.elements[6], mat4.elements[7]],
        [mat4.elements[8], mat4.elements[9], mat4.elements[10], mat4.elements[11]],
        [mat4.elements[12], mat4.elements[13], mat4.elements[14], mat4.elements[15]]
    ]
}

export function getCosSin(thetas) {
    const c1 = Math.cos(thetas[0]);
    const c2 = Math.cos(thetas[1]);
    const c3 = Math.cos(thetas[2]);
    const c4 = Math.cos(thetas[3]);
    const c5 = Math.cos(thetas[4]);
    const c6 = Math.cos(thetas[5]);
    const s1 = Math.sin(thetas[0]);
    const s2 = Math.sin(thetas[1]);
    const s3 = Math.sin(thetas[2]);
    const s4 = Math.sin(thetas[3]);
    const s5 = Math.sin(thetas[4]);
    const s6 = Math.sin(thetas[5]);
    return [[c1, c2, c3, c4, c5, c6], [s1, s2, s3, s4, s5, s6]];
}

export function forwardKin(thetas, D1, A3, D4) {
    // console.log(thetas);
    const [[c1, c2, c3, c4, c5, c6], [s1, s2, s3, s4, s5, s6]] = getCosSin(thetas);
    const T11 = c6 * (c5 * (c1 * c2 * c3 - c1 * s2 * s3) - (c4 * (-(c1 * c3 * s2) - c1 * c2 * s3) +
        s1 * s4) * s5) - (-(c4 * s1) + (-(c1 * c3 * s2) - c1 * c2 * s3) * s4) * s6
    const T12 = -(c6 * (-(c4 * s1) + (-(c1 * c3 * s2) - c1 * c2 * s3) * s4)) - (c5 * (c1 * c2 * c3 -
        c1 * s2 * s3) - (c4 * (-(c1 * c3 * s2) - c1 * c2 * s3) + s1 * s4) * s5) * s6
    const T13 = -(c5 * (c4 * (-(c1 * c3 * s2) - c1 * c2 * s3) + s1 * s4)) - (c1 * c2 * c3 - c1 * s2 * s3) * s5
    const T14 = A3 * c1 * c2 - D4 * (-(c1 * c2 * c3) + c1 * s2 * s3)
    const T21 = c6 * (c5 * (c2 * c3 * s1 - s1 * s2 * s3) - (c4 * (-(c3 * s1 * s2) - c2 * s1 * s3) -
        c1 * s4) * s5) - (c1 * c4 + (-(c3 * s1 * s2) - c2 * s1 * s3) * s4) * s6
    const T22 = -(c6 * (c1 * c4 + (-(c3 * s1 * s2) - c2 * s1 * s3) * s4)) - (c5 * (c2 * c3 * s1 -
        s1 * s2 * s3) - (c4 * (-(c3 * s1 * s2) - c2 * s1 * s3) - c1 * s4) * s5) * s6
    const T23 = -(c5 * (c4 * (-(c3 * s1 * s2) - c2 * s1 * s3) - c1 * s4)) - (c2 * c3 * s1 - s1 * s2 * s3) * s5
    const T24 = A3 * c2 * s1 - D4 * (-(c2 * c3 * s1) + s1 * s2 * s3)
    const T31 = c6 * (c5 * (c3 * s2 + c2 * s3) - c4 * (c2 * c3 - s2 * s3) * s5) - (c2 * c3 -
        s2 * s3) * s4 * s6
    const T32 = -(c6 * (c2 * c3 - s2 * s3) * s4) - (c5 * (c3 * s2 + c2 * s3) - c4 * (c2 * c3 -
        s2 * s3) * s5) * s6
    const T33 = -(c4 * c5 * (c2 * c3 - s2 * s3)) - (c3 * s2 + c2 * s3) * s5
    const T34 = D1 + A3 * s2 - D4 * (-(c3 * s2) - c2 * s3)

    MAT4.set(
        T11, T12, T13, T14,
        T21, T22, T23, T24,
        T31, T32, T33, T34,
        0, 0, 0, 1
    )
    return MAT4.clone();
}

export function getE6TMat4Inv(endEffectorTMat4) {
    const E6TMat4 = endEffectorTMat4.clone();
    E6TMat4.invert();
    return E6TMat4;
}

function get30RMat4(theta1, theta2, theta3) {
    const [c1, c2, c3] = [Math.cos(theta1), Math.cos(theta2), Math.cos(theta3)];
    const [s1, s2, s3] = [Math.sin(theta1), Math.sin(theta2), Math.sin(theta3)];
    const R11 = -(c1 * c3 * s2) - c1 * c2 * s3
    const R12 = -(c1 * c2 * c3) + c1 * s2 * s3
    const R13 = s1
    const R21 = -(c3 * s1 * s2) - c2 * s1 * s3
    const R22 = -(c2 * c3 * s1) + s1 * s2 * s3
    const R23 = -c1
    const R31 = c2 * c3 - s2 * s3
    const R32 = -(c3 * s2) - c2 * s3
    const R33 = 0
    MAT4.set(
        R11, R21, R31, 0,
        R12, R22, R32, 0,
        R13, R23, R33, 0,
        0, 0, 0, 1
    )
    return MAT4.clone();
}

export function get36RMat4(theta1, theta2, theta3, joints06TMat4) {
    const joints30RMat4 = get30RMat4(theta1, theta2, theta3);
    MAT4.multiplyMatrices(joints30RMat4, joints06TMat4);
    return MAT4.clone();
}

function equivalentAngle(theta, domain = [-Math.PI, Math.PI], closestValue) {
    // Calculate potential k for the upper limit of the domain
    let k = Math.round((closestValue - theta) / (2 * Math.PI));
    // Calculate potential equivalent angle
    let potentialEquivalent = theta + 2 * k * Math.PI;
    // Set bounds to avoid infinite loops
    const maxIterations = 100;
    let iterations = 0;
    // Adjust potentialEquivalent to be within the domain
    while (potentialEquivalent < domain[0] || potentialEquivalent > domain[1]) {
        if (iterations >= maxIterations) {
            // Return a fallback value if no solution is found within the domain
            return NaN;
        }
        if (potentialEquivalent < domain[0]) {
            potentialEquivalent += 2 * Math.PI;
        } else if (potentialEquivalent > domain[1]) {
            potentialEquivalent -= 2 * Math.PI;
        }
        iterations++;
    }
    return potentialEquivalent;
}

export function inverseKin(targetTMat4, tMat4_E6, D1, A3, D4, curThetas, thetaRanges, precision = 0.001) {
    const joints06TMat4 = MAT4.multiplyMatrices(targetTMat4, tMat4_E6).clone();
    const { elements: elements06 } = joints06TMat4;
    const X = elements06[12];
    const Y = elements06[13];
    const Z = elements06[14];
    const R = Math.sqrt(X * X + Y * Y);
    const S = Z - D1;
    const theta1 = equivalentAngle(
        Math.atan2(Y, X),
        thetaRanges[2],
        curThetas[2]
    );
    // Memoization for repeated calculations
    const num3 = (R * R) + (S * S) - (A3 * A3) - (D4 * D4);
    const den3 = 2 * A3 * D4;
    const theta3 = equivalentAngle(
        Math.acos(num3 / den3),
        thetaRanges[2],
        curThetas[2]
    );
    const num2 = R * (A3 + D4 * Math.cos(theta3)) + S * (D4 * Math.sin(theta3));
    const den2 = -S * (A3 + D4 * Math.cos(theta3)) + R * (D4 * Math.sin(theta3));
    const theta2 = Math.abs(Math.tan(theta3)) < precision ?
        equivalentAngle(
            Math.atan2(S, R),
            thetaRanges[1],
            curThetas[1]
        ) :
        equivalentAngle(
            Math.atan2(num2, den2),
            [thetaRanges[1][0] + Math.PI / 2, thetaRanges[1][1] + Math.PI / 2],
            curThetas[1] + Math.PI / 2
        ) - Math.PI / 2;
    const joints36RMat4 = get36RMat4(theta1, theta2, theta3, joints06TMat4);
    const { elements: elements36 } = joints36RMat4;
    const R13 = elements36[8];
    const R21 = elements36[1];
    const R22 = elements36[5];
    const R23 = elements36[9];
    const R33 = elements36[10];
    const theta4 = equivalentAngle(
        Math.atan2(-R33, -R13),
        thetaRanges[3],
        curThetas[3]
    );
    const theta5 = equivalentAngle(
        Math.asin(R23),
        thetaRanges[4],
        curThetas[4]
    );
    const theta6 = equivalentAngle(
        Math.atan2(R22, -R21),
        thetaRanges[5],
        curThetas[5]
    );
    return [theta1, theta2, theta3, theta4, theta5, theta6];
}

export function isInsideWorkspace(position, D1, A3, D4, AE) {
    const [x, y, z] = position;
    const R = (A3 + D4 + AE) * 0.8;
    const [X0, Y0, Z0] = [0, 0, D1];
    const [dx, dy, dz] = [x - X0, y - Y0, z - Z0];
    const r2 = dx * dx + dy * dy + dz * dz;
    return r2 <= R * R;
}