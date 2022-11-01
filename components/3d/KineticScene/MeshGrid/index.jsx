import { Row } from "./Row"
import { gradientArray } from "../../../../helpers/format"
import { colors } from "../../../../helpers/format"

function MeshGrid({ n_balls = 15, n_rows = 15, x_lim = 18, y_lim = 3, scroll = 0 }) {
    const color_arr = gradientArray(n_rows, ...colors['default'].meshGrid3d)
    const gap = (n_balls + 1) / x_lim
    const z_lim = gap * n_rows / 2
    const phase = Math.PI / n_rows + scroll
    // const z_array = []
    const color_z_array = []
    for (let j = 0; j < n_rows; j++) {
        // z_array.push(z_lim * (2 * j / (n_rows - 1) - 1))
        const z = z_lim * (2 * j / (n_rows - 1) - 1)
        color_z_array.push([color_arr[j], z])
    }

    return (
        <group name="mesh_grid">
            {color_z_array.map((color_z, j) => {
                return (
                    <Row
                        key={j}
                        n_balls={n_balls}
                        z={color_z[1]}
                        x_lim={x_lim}
                        y_lim={y_lim}
                        phase={phase * j}
                        color={color_z[0]} />
                )
            })}
        </group>
    );
}

export { MeshGrid };