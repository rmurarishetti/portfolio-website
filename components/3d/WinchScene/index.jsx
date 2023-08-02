import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { Winch } from './Winch';
import styles from './WinchScene.module.scss';
import { useCorrectedTheme, useScrollPercentage } from '../../../helpers/hooks';
import { ThemedLights, ThemedEnvironment } from '../themedProps';

const MemoizedWinch = memo(Winch);

function WinchScene({ scrollStart, scrollEnd }) {
    const [scrolRef, scrollPercentage] = useScrollPercentage();
    const theme = useCorrectedTheme();

    return (
        <Canvas
            className={styles.scene}
            gl={{ preserveDrawingBuffer: true }}
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 0], fov: 30 }}
            ref={scrolRef}>
            <ThemedLights
                theme={theme}
                lightAmbientIntensity={10}
                lightDirectionalIntensity={2}
                darkPointIntensity={0.6}
                darkDirectionalIntensity={0.4}
                darkAmbientIntensity={0}
                lightThemePosition={[0, 0.3, 0.2]}
                darkThemePosition={[0, 0.2, 0.3]}
            />
            {/* <axesHelper args={[0.1]} /> */}
            <Suspense fallback={null}>
                <Stage
                    preset="rembrandt"
                    intensity={0.05}
                    environment={null}
                    contactShadow
                    shadows
                    adjustCamera={false}>
                    <ThemedEnvironment />
                    <MemoizedWinch scroll={scrollPercentage} scrollStart={scrollStart} scrollEnd={scrollEnd} />
                </Stage>
            </Suspense>
        </Canvas>
    );
}

export default memo(WinchScene);