import { Suspense, useMemo, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { Winch } from './Winch';
import styles from './WinchScene.module.scss';
import { useCorrectedTheme } from '../../../helpers/hooks';

function useThemeLights(theme) {
    return useMemo(() => {
        const ambientIntensity = theme === 'light' ? 3 : 0;
        const pointColor = theme === 'light' ? '#C5AFFF' : '#7A00FC';
        const pointIntensity = theme === 'light' ? 0 : 1;
        const stageIntensity = theme === 'light' ? 3 : 0.2;
        const environment = theme === 'light' ? 'sunset' : 'night';

        return { ambientIntensity, pointColor, pointIntensity, stageIntensity, environment };
    }, [theme]);
}

const MemoizedWinch = memo(Winch);

function WinchScene({ scrollPercentage }) {
    const theme = useCorrectedTheme();
    const { ambientIntensity, pointColor, pointIntensity, stageIntensity, environment } = useThemeLights(theme);

    return (
        <Canvas
            className={styles.scene}
            gl={{ preserveDrawingBuffer: true }}
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 0], fov: 30 }}>
            <ambientLight intensity={ambientIntensity} />
            <directionalLight position={[5, 0.2, -1]} color="#FFFFFF" intensity={0.1} />
            <pointLight
                castShadow
                receiveShadow
                position={[0, 50, 20]}
                color={pointColor}
                intensity={pointIntensity}
            />
            <Suspense fallback={null}>
                <Stage
                    preset="rembrandt"
                    intensity={stageIntensity}
                    contactShadow
                    shadows="accumulative"
                    adjustCamera={false}
                    environment={environment}>
                    <MemoizedWinch scroll={scrollPercentage} />
                </Stage>
            </Suspense>
        </Canvas>
    );
}

export default memo(WinchScene);