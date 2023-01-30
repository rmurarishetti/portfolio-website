import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Globe } from './Globe';
import { useCorrectedTheme } from '../../../helpers/hooks';
import styles from './GlobeScene.module.scss'
import { a } from '@react-spring/three'

function GlobeScene({ homeCities, visitedCities }) {
    const theme = useCorrectedTheme()

    const themedDirectionalLightProps = {
        'dark': {
            intensity: 1,
            position: [-100, -100, -100]
        },
        'light': {
            intensity: 1,
            position: [3, 3, 3]
        }
    }

    const themedAmbientLightProps = {
        'dark': {
            intensity: 0.4
        },
        'light': {
            intensity: 0.3
        }
    }
    return (
        <Suspense fallback={null}>
            <Canvas className={styles.scene}>
                <a.ambientLight
                    {...themedAmbientLightProps[theme]}
                    position={[3, 3, 3]} />
                <a.directionalLight
                    {...themedDirectionalLightProps[theme]}
                    lookAt={[0, 0, 0]} />
                <Suspense
                    fallback={
                        <mesh>
                            <sphereGeometry attach="geometry" args={[2.3, 64, 64]} />
                            <meshPhongMaterial color={theme == 'light' ? '#85bbce' : '#161C41'} attach="material" specular={'#7300FF'} shininess={10} />
                        </mesh>}>
                    <Globe position={[0, 0, 0]} theme={theme} radius={2.3} homeCities={homeCities} visitedCities={visitedCities} />
                </Suspense>
            </Canvas>
        </Suspense>
    )
}

export default GlobeScene;