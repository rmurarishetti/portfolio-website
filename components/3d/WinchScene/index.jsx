import { Suspense, useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import { Winch } from './Winch'
import styles from './WinchScene.module.scss'
import { useCorrectedTheme } from "../../../helpers/hooks";
import { SelectiveBloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { EffectComposer } from '@react-three/postprocessing'
import { DepthOfField, Bloom } from '@react-three/postprocessing'

function WinchScene({ scrollPercentage }) {
    const theme = useCorrectedTheme();
    const sceneRef = useRef();

    return (
        <Canvas
            className={styles.scene}
            gl={{ preserveDrawingBuffer: true }}
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 0], fov: 30 }}>
            <ambientLight
                intensity={theme == 'light' ? 2 : 0.1} />
            <directionalLight
                position={[5, 0.2, -1]}
                color={'#FFFFFF'}
                intensity={0.1} />
            <pointLight
                castShadow
                receiveShadow
                position={[0, 50, 20]}
                color={theme == 'light' ? "#C5AFFF" : "#7A00FC"}
                intensity={theme == 'light' ? 2 : 0.2} />
            <Suspense fallback={null}>
                <Stage
                    controls={sceneRef}
                    preset='rembrandt'
                    intensity={theme == 'light' ? 1 : 0}
                    contactShadow
                    shadows="accumulative"
                    adjustCamera={false}
                    environment={theme == 'light' ? 'sunset' : 'night'}>
                    <Winch scroll={scrollPercentage} />
                </Stage>
            </Suspense>
            {/* <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.05} bokehScale={1} height={600} />
                <Bloom luminanceThreshold={1.5} luminanceSmoothing={2} height={600} kernelSize={4} />
            </EffectComposer> */}
            {/* <OrbitControls ref={sceneRef} autoRotate={false} enableZoom={false} enableRotate={true} /> */}
        </Canvas>
    )
}

export default WinchScene;