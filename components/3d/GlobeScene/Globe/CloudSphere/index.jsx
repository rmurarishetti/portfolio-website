import { useRef, useState, useEffect, useMemo, Suspense, memo, useCallback } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { PresentationControls, useCursor, OrbitControls } from '@react-three/drei'

export function CloudSphere({ position, radius }) {
    const CloudSphereRef = useRef(null);
    useFrame((_, delta) => {
        const dThetaY = delta / 50;
        CloudSphereRef.current.rotation.y += dThetaY;
    });
    const makeUrl = (file) => `./textures/${file}.png`;

    const [texture] = useLoader(TextureLoader, [makeUrl('earth_clouds')]);

    return (
        <mesh ref={CloudSphereRef}>
            <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
            <Suspense fallback={<meshStandardMaterial color={'#FFFFFF00'} attach="material" />}>
                <meshPhongMaterial attach="material" map={texture} shininess={0} transparent />
            </Suspense>
        </mesh>
    )
}