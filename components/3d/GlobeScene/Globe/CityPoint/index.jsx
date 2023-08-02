import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import { coordinates2cartesian } from '../../../../../helpers/math';
import { colors } from '../../../../../helpers/format';
import CityLabel from './CityLabel';
import { useSpring, animated as a, config } from '@react-spring/three';


export function CityPoint({ globeRadius, city, theme, type = "home", globeRef }) {
    const position = coordinates2cartesian(globeRadius, city.coordinates)
    const descriptionPosition = coordinates2cartesian(globeRadius + 0.1, [city.coordinates[0] - 5, city.coordinates[1] + 0])
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useCursor(hovered, 'pointer', 'auto')

    // const color = active || hovered ? colors[theme].city3d[type].active : colors[theme].city3d[type].default

    // const size = type === "home" ? 0.03 : 0.02
    const color = active || hovered ? colors[theme].city3d[type].active : colors[theme].city3d[type].default
    const { scale, animatedColor } = useSpring({
        scale: hovered ? 2 : 1,
        animatedColor: active || hovered ? colors[theme].city3d[type].active : colors[theme].city3d[type].default,
        config: config.default
    })

    return (
        <>
            {/* <axesHelper args={[1]} /> */}
            <a.mesh
                scale={scale}
                position={position}
                onClick={() => setActive((activeState) => !activeState)}
                onPointerOver={() => { setHover(true) }}
                onPointerOut={() => { setHover(false) }}>
                <sphereGeometry args={[type === "home" ? 0.03 : 0.02, 10, 10]} />
                <a.meshStandardMaterial
                    color={animatedColor}
                    emissive={animatedColor}
                    emissiveIntensity={1} />
            </a.mesh>
            {(hovered || active) &&
                <CityLabel
                    city={city}
                    color={color}
                    globeRadius={globeRadius}
                    globeRef={globeRef}
                    onClick={() => setActive(false)} />}
        </>
    )
}
