import { useRef, useState, useEffect } from 'react'
import { Ball } from "./Ball";
import { colors } from '../../../../../helpers/format';
import { useSpring } from '@react-spring/three'

function Row({ n_balls = 15, z = 0, x_lim = 18, y_lim = 3, phase, color = '#8168ff' }) {
    const row = []
    const coordinates = []
    for (let i = 0; i < n_balls; i++) {
        const x = x_lim * (2 * i / (n_balls - 1) - 1)
        const y = Math.sin((x * 2 * Math.PI / x_lim) - phase) * y_lim
        coordinates.push([x, y])
    }

    const rowRef = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    const colorState = hovered ?
        colors['default'].row3d.hovered :
        active ? colors['default'].row3d.active :
            color
    const { scale } = useSpring({ scale: hovered ? 2 : 1 })

    return (
        <group name="row"
            ref={rowRef}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => {
                setHover(true)
            }}
            onPointerOut={(event) => {
                setHover(false)
            }}>
            {coordinates.map((coordinate, i) => {
                return (
                    <Ball
                        key={i}
                        position={[coordinate[0], coordinate[1], z]}
                        radius={0.1}
                        color={colorState}
                        scale={scale} />
                )
            })}
        </group>
    );
}

export { Row };