import { Suspense, useMemo, Fragment, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Globe } from './Globe';
import { useCorrectedTheme } from '../../../helpers/hooks';
import styles from './GlobeScene.module.scss';
import { useSpring, animated as a, config } from '@react-spring/three';
import { ThemedLights } from '../themedProps';

const MemoizedGlobe = memo(Globe);

function GlobeScene({ homeCities, visitedCities }) {
    const theme = useCorrectedTheme();

    const { fallBackSphereColor } = useSpring({
        fallBackSphereColor: theme === 'light' ? '#5C697E' : '#161C41',
        config: config.molasses
    });

    return (
        <Suspense fallback={null}>
            <Canvas className={styles.scene} shadows>
                <Fragment>
                    <ThemedLights
                        theme={theme}
                        showPointLight={false}
                        lightAmbientIntensity={0.3}
                        darkAmbientIntensity={0.4}
                        lightDirectionalIntensity={1}
                        darkDirectionalIntensity={1}
                        lightThemePosition={[3, 3, 3]}
                        darkThemePosition={[-3, -3, -2]}
                    />
                    <Suspense
                        fallback={
                            <a.mesh>
                                <sphereGeometry attach="geometry" args={[2.3, 64, 64]} />
                                <a.meshPhongMaterial
                                    color={fallBackSphereColor}
                                    attach="material"
                                    specular="#7300FF"
                                    shininess={10}
                                />
                            </a.mesh>
                        }>
                        <MemoizedGlobe position={[0, 0, 0]} theme={theme} radius={2.3} homeCities={homeCities} visitedCities={visitedCities} />
                    </Suspense>
                </Fragment>
            </Canvas>
        </Suspense>
    );
}

export default memo(GlobeScene);