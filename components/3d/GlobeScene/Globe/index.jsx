import { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Color } from 'three'
import { PresentationControls, useCursor, OrbitControls } from '@react-three/drei'
import { GlowSphere } from './GlowSphere';
import { CityPoint } from './CityPoint';
import { FlightArc } from './FlightArc';

export function Globe({ position, theme, radius, homeCities, visitedCities }) {
    const [mobile, setMobile] = useState(window.innerWidth < 500)
    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth < 500)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    const groupRef = useRef(null);
    const globeRef = useRef(null);

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useCursor(hovered, 'grab', 'auto')
    useCursor(active, 'grabbing', 'auto')

    useFrame((state, delta) => {
        const dThetaY = hovered ? delta / 30 : delta / 10;
        groupRef.current.rotation.y += dThetaY;
    });

    const makeUrl = (file) => `./textures/${file}.jpg`;
    const [texture, bump, spec] = useLoader(TextureLoader, [makeUrl(theme === 'light' ? 'earth_day' : 'earth_night'), makeUrl('earth_bump'), makeUrl('earth_spec')]);

    const HomeCityPoints = homeCities ? homeCities.map((city) => {
        return <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="home" globeRef={globeRef} />;
    }) : undefined;

    const VisitedCityPoints = visitedCities ? visitedCities.map((city) => {
        return <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="visited" globeRef={globeRef} />;
    }) : undefined;

    const HomeCityFlightArcs = []
    if (homeCities) {
        for (let i = 0; i < homeCities.length - 1; i++) {
            HomeCityFlightArcs.push(
                <FlightArc
                    key={homeCities[i].city + homeCities[i + 1].city}
                    globeRadius={radius}
                    city1={homeCities[i]}
                    city2={homeCities[i + 1]}
                    theme={theme}
                    type="home"
                />)
        }
    }



    return (
        <PresentationControls
            global={false}// Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            rotation={[Math.PI / 6, Math.PI, 0]} // Default rotation
            polar={[-Math.PI / 3.5, Math.PI / 10]} // Vertical limits
            config={{ mass: 1, tension: 200, friction: 20 }} // Spring config
        >
            <group
                position={position}
                ref={groupRef}
                onPointerDown={() => setActive(true)}
                onPointerLeave={() => setActive(false)}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <mesh ref={globeRef}>
                    <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
                    <Suspense fallback={<meshStandardMaterial color={theme == 'light' ? '#85bbce' : '#03071d'} attach="material" />}>
                        <meshPhongMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.03} specularMap={spec} specular={new Color('#7300FF')} shininess={10} />
                    </Suspense>
                </mesh>
                <GlowSphere theme={theme} position={position} radius={1.1 * radius} />
                {VisitedCityPoints}
                {HomeCityPoints}
                {HomeCityFlightArcs}
            </group >
            <OrbitControls enabled={hovered || mobile} enableRotate={false} maxDistance={5} minDistance={4} enablePan={false} />
        </PresentationControls>
    );
};