import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import styles from './KineticScene.module.scss'
import { useScrollPercentage } from 'react-scroll-percentage'
import { MeshGrid } from './MeshGrid'
import Row from './MeshGrid/Row'


function KineticScene() {
    const [scrolRef, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })
    return (
        <Canvas
            ref={scrolRef}
            className={styles.scene}
            camera={{ fov: 10, position: [0, 0, 50] }}
            dpr={[1, 2]}
            shadows>
            {/* <axesHelper args={[1]} /> */}
            <Suspense fallback={null} >
                <spotLight position={[0, 0, 20]} />
                <MeshGrid
                    n_balls={20}
                    n_rows={20}
                    x_lim={18}
                    y_lim={3}
                    scroll={percentage} />
            </Suspense>
        </Canvas>
    );
}

export default KineticScene;