import { useRef, useState, useEffect } from 'react'
import { Ball } from "./Ball";

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

    let colorState = color;
    if (active & hovered) {
        colorState = 'pink'
    }
    else if (active & !hovered) {
        colorState = 'hotpink'
    }
    else if (!active & hovered) {
        colorState = 'red'
    }

    return (
        <group name="row"
            ref={rowRef}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => {
                setHover(true)
                // document.body.style.cursor = 'pointer'
            }}
            onPointerOut={(event) => {
                setHover(false)
                // document.body.style.cursor = 'auto'
            }}>
            {coordinates.map((coordinate, i) => {
                return (
                    <Ball
                        key={i}
                        position={[coordinate[0], coordinate[1], z]}
                        radius={0.1}
                        color={colorState}
                        scale={hovered ? 1.4 : 1} />
                )
            })}
        </group>
    );
}

export { Row };