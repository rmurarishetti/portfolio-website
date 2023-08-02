import { CubicBezierLine } from '@react-three/drei'
import { cubicBezierCurve } from '../../../../helpers/math';
import { colors } from '../../../../helpers/format';
import { useMemo } from 'react';

export function FlightArc({ globeRadius, city1, city2, theme, type = "home" }) {
    const bezierPoints = useMemo(() => cubicBezierCurve(city1.coordinates, city2.coordinates, globeRadius), [city1, city2, globeRadius]);

    const LineProps = type === "home" ?
        {
            color: colors[theme].flightArc.home,
            lineWidth: 1
        } :
        {
            color: colors[theme].flightArc.visited,
            lineWidth: 0.5
        }



    return (
        <CubicBezierLine
            start={bezierPoints[0]}               // Starting point
            midA={bezierPoints[1]}                // First control point
            midB={bezierPoints[2]}                // Second control point
            end={bezierPoints[3]}               // Ending point
            castShadow={true}
            {...LineProps}
        >
        </CubicBezierLine>
    );
}