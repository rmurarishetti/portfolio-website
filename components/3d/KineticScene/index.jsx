import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, useCursor } from '@react-three/drei'
import { useScrollPercentage } from 'react-scroll-percentage'
import { MeshGrid } from './MeshGrid'
import styles from './KineticScene.module.scss'


function KineticScene() {
    const [scrolRef, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useCursor(hovered, 'grab', 'auto')
    useCursor(active, 'grabbing', 'auto')
    return (
        <Canvas
            ref={scrolRef}
            onPointerDown={() => setActive(true)}
            onPointerLeave={() => setActive(false)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            className={styles.scene}
            camera={{ fov: 10, position: [0, 0, 50] }}
            dpr={[1, 2]}
            shadows>
            {/* <axesHelper args={[1]} /> */}
            <Suspense fallback={null} >
                <spotLight position={[0, 0, 20]} />
                <PresentationControls global={true} position={[0, 0, 50]} cursor={false}>
                    <MeshGrid
                        n_balls={20}
                        n_rows={20}
                        x_lim={18}
                        y_lim={3}
                        scroll={percentage} />
                </PresentationControls>
            </Suspense>
        </Canvas>
    );
}

export default KineticScene;