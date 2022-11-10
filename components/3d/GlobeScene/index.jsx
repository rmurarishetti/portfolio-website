import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { Globe } from './Globe';
import { useTheme } from 'next-themes';
import styles from './GlobeScene.module.scss'
import { useState, useEffect, useRef } from 'react';
import { a } from '@react-spring/three'
import { OrbitControls } from '@react-three/drei';

export function GlobeScene({ homeCities, visitedCities }) {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const correctedTheme = theme == 'system' ? 'dark' : theme

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
        isMounted && <Canvas className={styles.scene}>
            <a.ambientLight
                {...themedAmbientLightProps[correctedTheme]}
                position={[3, 3, 3]} />
            <a.directionalLight
                {...themedDirectionalLightProps[correctedTheme]}
                lookAt={[0, 0, 0]} />
            <Globe position={[0, 0, 0]} theme={correctedTheme} radius={2.3} homeCities={homeCities} visitedCities={visitedCities} />
            <OrbitControls enableRotate={false} maxDistance={6} minDistance={4} enablePan={false} />
        </Canvas>
    )
}