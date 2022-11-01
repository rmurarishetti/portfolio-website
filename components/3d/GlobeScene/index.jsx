import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { Globe } from './Globe';
import { useTheme } from 'next-themes';
import styles from './GlobeScene.module.scss'
import { useState, useEffect, useRef } from 'react';
import { a } from '@react-spring/three'

export function GlobeScene({ homeCities, visitedCities }) {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const themedDirectionalLightProps = {
        'dark': {
            intensity: 5,
            position: [-100, -100, -100]
        },
        'light': {
            intensity: 1,
            position: [3, 3, 3]
        }
    }

    const themedAmbientLightProps = {
        'dark': {
            intensity: 0.5
        },
        'light': {
            intensity: 0.3
        }
    }
    return (
        isMounted && <Canvas className={styles.scene}>
            <a.ambientLight
                {...themedAmbientLightProps[theme]}
                position={[3, 3, 3]} />
            <a.directionalLight
                {...themedDirectionalLightProps[theme]}
                lookAt={[0, 0, 0]} />
            <Globe position={[0, 0, 0]} theme={theme} radius={2.3} homeCities={homeCities} visitedCities={visitedCities} />
        </Canvas>
    )
}


