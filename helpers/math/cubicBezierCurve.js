import { v_ab, add, coeff, distanceBetween, unit } from "./trig";
import { coordinates2cartesian } from "./coordinates2cartesian";


function clamp(num, min, max) {
    return num <= min ? min : (num >= max ? max : num);
}

export function cubicBezierCurve(coord1, coord2, radius) {

    // start and end points
    const p1 = coordinates2cartesian(radius, coord1);
    const p4 = coordinates2cartesian(radius, coord2);

    // altitudes
    const maxAltitude = radius / 2.1;
    const minAltitude = radius / 10;
    const altitude = clamp(distanceBetween(p1, p4) * .75, minAltitude, maxAltitude);

    // 2 control points
    const v14 = v_ab(p1, p4);
    const a = add(p1, coeff(0.25, v14));
    const b = add(p1, coeff(0.75, v14));

    const p2 = coeff((radius + altitude), unit(a));
    const p3 = coeff((radius + altitude), unit(b));

    return [p1, p2, p3, p4];
}