import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three'
import { coordinates2cartesian } from '../../../../../helpers/math';
import { colors } from '../../../../../helpers/format';
import CityLabel from './CityLabel';


export function CityPoint({ globeRadius, city, theme, type = "home", globeRef }) {
    const position = coordinates2cartesian(globeRadius, city.coordinates)
    const descriptionPosition = coordinates2cartesian(globeRadius + 0.1, [city.coordinates[0] - 5, city.coordinates[1] + 0])
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useCursor(hovered, 'pointer', 'auto')

    const color = active || hovered ? colors[theme].city3d[type].active : colors[theme].city3d[type].default

    const size = type === "home" ? 0.04 : 0.02
    const { scale } = useSpring({ scale: hovered ? 2 : 1 })

    return (
        <>
            {/* <axesHelper args={[1]} /> */}
            <animated.mesh
                scale={scale}
                position={position}
                onClick={() => setActive((activeState) => !activeState)}
                onPointerOver={() => { setHover(true) }}
                onPointerOut={() => { setHover(false) }}>
                <sphereGeometry args={[size, 10, 10]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1}
                    roughness={1} />
            </animated.mesh>
            {(hovered || active) &&
                <CityLabel
                    city={city}
                    color={color}
                    globeRadius={globeRadius}
                    globeRef={globeRef} />}
        </>
    )
}
