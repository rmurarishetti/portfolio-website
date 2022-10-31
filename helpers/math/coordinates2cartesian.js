export function coordinates2cartesian(radius, coordinates) {
    const radCoeff = Math.PI / 180
    const phi = (90 - coordinates[0]) * radCoeff;
    const theta = (180 + coordinates[1]) * radCoeff;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [x, y, z];
}