import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Winch from './Winch';
import * as THREE from 'three'
import styles from './WinchScene.module.scss'
import { useScrollPercentage } from 'react-scroll-percentage'

function WinchScene() {
    const [scrolRef, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })
    return (
        <Canvas
            ref={scrolRef}
            className={styles.scene}
            dpr={[1, 2]}
            shadows>
            {/* <axesHelper args={[1]} /> */}
            <Suspense fallback={null} >
                <Winch scale={0.02} position={[0, 0, 0]} scroll={percentage} />
            </Suspense>
        </Canvas>
    );
}

export default WinchScene;