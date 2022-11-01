import { useState } from 'react';
import { useCursor, Html } from '@react-three/drei';
import { QuadraticBezierLine } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three'
import { coordinates2cartesian } from '../../../../../helpers/math';
import { colors } from '../../../../../helpers/format';

import styles from './CityPoint.module.scss'


export function CityPoint({ globeRadius, city, theme, type = "home", globeRef }) {
    const position = coordinates2cartesian(globeRadius, city.coordinates)
    const descriptionPosition = coordinates2cartesian(globeRadius + 0.1, [city.coordinates[0] - 5, city.coordinates[1] + 0])
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useCursor(hovered, 'pointer', 'auto')

    const [occluded, occlude] = useState()
    const color = active ? colors[theme].city3d[type].active : colors[theme].city3d[type].default
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
                <sphereGeometry args={[size, 5, 5]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={1}
                    roughness={1} />
            </animated.mesh>
            {(hovered || active) &&
                <>
                    <QuadraticBezierLine
                        start={position}
                        end={descriptionPosition}
                        castShadow={true}
                        color={color}
                        lineWidth={1}
                    />
                    <Html
                        position={descriptionPosition}
                        occlude={[globeRef]}
                        onOcclude={occlude}>
                        <div className={styles.cityPoint}
                            style={{
                                opacity: occluded ? 0 : 1,
                                backgroundColor: color + '10',
                                borderColor: color + '20',
                                transform: `scale(${occluded ? 0.25 : 1})`
                            }}>
                            {city.description}
                        </div>
                    </Html>
                </>
            }
        </>
    )
}
