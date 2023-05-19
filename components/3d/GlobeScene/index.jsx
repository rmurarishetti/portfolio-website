import { Suspense, useMemo, Fragment, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Globe } from './Globe';
import { useCorrectedTheme } from '../../../helpers/hooks';
import styles from './GlobeScene.module.scss';
import { a } from '@react-spring/three';

function useThemedLightProps(theme) {
    return useMemo(() => {
        const lightProps = {
            dark: {
                directional: { intensity: 1, position: [-100, -100, -100] },
                ambient: { intensity: 0.4 },
            },
            light: {
                directional: { intensity: 1, position: [3, 3, 3] },
                ambient: { intensity: 0.3 },
            },
        };

        return lightProps[theme];
    }, [theme]);
}

const MemoizedGlobe = memo(Globe);

function GlobeScene({ homeCities, visitedCities }) {
    const theme = useCorrectedTheme();
    const { directional, ambient } = useThemedLightProps(theme);

    return (
        <Suspense fallback={null}>
            <Canvas className={styles.scene} shadows>
                <Fragment>
                    <a.ambientLight {...ambient} position={[3, 3, 3]} />
                    <a.directionalLight {...directional} lookAt={[0, 0, 0]} />
                    <Suspense
                        fallback={
                            <mesh>
                                <sphereGeometry attach="geometry" args={[2.3, 64, 64]} />
                                <meshPhongMaterial
                                    color={theme === 'light' ? '#5C697E' : '#161C41'}
                                    attach="material"
                                    specular="#7300FF"
                                    shininess={10}
                                />
                            </mesh>
                        }>
                        <MemoizedGlobe position={[0, 0, 0]} theme={theme} radius={2.3} homeCities={homeCities} visitedCities={visitedCities} />
                    </Suspense>
                </Fragment>
            </Canvas>
        </Suspense>
    );
}

export default memo(GlobeScene);