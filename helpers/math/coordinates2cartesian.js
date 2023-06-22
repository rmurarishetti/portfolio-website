export function coordinates2cartesian(radius, coordinates) {
    const radCoeff = Math.PI / 180;
    const phi = (90 - coordinates[0]) * radCoeff;
    const theta = (180 + coordinates[1]) * radCoeff;

    if (isNaN(phi) || isNaN(theta)) {
        throw new Error('Invalid angles - phi or theta is NaN');
    }

    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        throw new Error('Invalid Cartesian coordinates - x, y or z is NaN');
    }

    return [x, y, z];
}