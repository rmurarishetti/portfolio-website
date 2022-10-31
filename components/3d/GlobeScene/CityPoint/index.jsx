import { useState, useEffect, FunctionComponentElement } from 'react';
import { ThreeElements } from '@react-three/fiber';
import { Color } from 'three'
import { coordinates2cartesian } from '../../../../helpers/math';
import { colors } from '../../../../helpers/format';


export function CityPoint({ globeRadius, city, theme, type = "home", handleCityDescription }) {
    const position = coordinates2cartesian(globeRadius, city.coordinates)
    const [hovered, setHover] = useState(false);

    useEffect(() => {
        handleCityDescription(hovered ? city.description : null)
        document.body.style.cursor = hovered ? 'help' : 'auto'
    }, []);

    const pointProps = type === "home" ?
        {
            size: 0.04,
            color: colors[theme].homeCity
        } :
        {
            size: 0.02,
            color: colors[theme].visitedCity
        }

    return (
        <mesh
            position={position}
            onPointerOver={() => { setHover(true) }}
            onPointerOut={() => { setHover(false) }}>
            <sphereGeometry args={[pointProps.size, 5, 5]} />
            <meshStandardMaterial
                color={pointProps.color}
                emissive={pointProps.color}
                emissiveIntensity={1}
                roughness={1} />
        </mesh>
    )
}
