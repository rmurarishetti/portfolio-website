import { useRef, useState, useEffect, useMemo, Suspense, memo, useCallback } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { PresentationControls, useCursor, OrbitControls } from '@react-three/drei'
import { GlowSphere } from './GlowSphere';
import { CityPoint } from './CityPoint';
import { FlightArc } from './FlightArc';
import { CloudSphere } from './CloudSphere';

const makeUrl = (file) => `./textures/${file}.jpg`;

function useWindowResize(callback) {
    useEffect(() => {
        const handleResize = () => callback(window.innerWidth < 500);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [callback]);
}

export function Globe({ position, theme, radius, homeCities, visitedCities }) {
    const [mobile, setMobile] = useState(window.innerWidth < 500);
    const handleResize = useCallback((isMobile) => setMobile(isMobile), []);
    useWindowResize(handleResize);

    const groupRef = useRef(null);
    const globeRef = useRef(null);

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useCursor(hovered, 'grab', 'auto');
    useCursor(active, 'grabbing', 'auto');

    useFrame((_, delta) => {
        const dThetaY = hovered ? delta / 30 : delta / 20;
        groupRef.current.rotation.y += dThetaY;
    });

    const [texture, spec, normal] = useLoader(TextureLoader, [makeUrl(theme === 'light' ? 'earth_day' : 'earth_night'), makeUrl('earth_spec'), makeUrl('earth_normal')]);

    const HomeCityPoints = useMemo(() => homeCities?.map((city) => (
        <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="home" globeRef={globeRef} />
    )), [homeCities, radius, theme]);

    const VisitedCityPoints = useMemo(() => visitedCities?.map((city) => (
        <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="visited" globeRef={globeRef} />
    )), [visitedCities, radius, theme]);

    const HomeCityFlightArcs = useMemo(() => {
        if (!homeCities) return [];
        return homeCities.slice(0, -1).map((city1, i) => (
            <FlightArc
                key={city1.city + homeCities[i + 1].city}
                globeRadius={radius}
                city1={city1}
                city2={homeCities[i + 1]}
                theme={theme}
                type="home"
            />
        ));
    }, [homeCities, radius, theme]);

    const handlePointer = useCallback((enter, leave) => {
        setHover(enter);
        setActive(leave);
    }, []);

    return (
        <PresentationControls
            global={false}
            cursor={false}
            snap={false}
            rotation={[Math.PI / 6, Math.PI, 0]}
            polar={[-Math.PI / 3.5, Math.PI / 10]}
            config={{ mass: 1, tension: 200, friction: 20 }}
        >
            <group
                position={position}
                ref={groupRef}
                onPointerDown={() => setActive(true)}
                onPointerLeave={() => handlePointer(false, false)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => handlePointer(false, true)}>

                <GlowSphere theme={theme} position={position} radius={1.1 * radius} />
                <mesh ref={globeRef}>
                    <sphereGeometry attach="geometry" args={[radius, 64, 64]} />

                    <CloudSphere position={position} radius={1.01 * radius} />
                    <Suspense fallback={<meshStandardMaterial color={theme == 'light' ? '#8186C2' : '#03071d'} attach="material" />}>
                        <meshPhongMaterial
                            attach="material"
                            map={texture}
                            specularMap={spec}
                            specular={'#7300FF'}
                            normalMap={normal}
                            normalMapType={'TangentSpaceNormalMap'}
                            normalScale={[0.5, 0.5]}
                            shininess={10} />
                    </Suspense>
                </mesh>
                {VisitedCityPoints}
                {HomeCityPoints}
                {HomeCityFlightArcs}
            </group>
            <OrbitControls enabled={hovered || mobile} enableRotate={false} maxDistance={5} minDistance={4} enablePan={false} />
        </PresentationControls>
    );
};