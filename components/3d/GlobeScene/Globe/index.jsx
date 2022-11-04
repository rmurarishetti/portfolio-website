import { useRef, useState } from 'react';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Color, Mesh } from 'three'
import { PresentationControls, useCursor } from '@react-three/drei'
import { GlowSphere } from './GlowSphere';
import { CityPoint } from './CityPoint';
import { FlightArc } from './FlightArc';

export function Globe({ position, theme, radius, homeCities, visitedCities }) {
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
            speed={2} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[Math.PI / 6, Math.PI, 0]} // Default rotation
            polar={[-Math.PI / 6, Math.PI / 3.5]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
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
                    <meshPhongMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} specularMap={spec} specular={new Color('#909090')} shininess={20} />
                </mesh>
                <GlowSphere theme={theme} position={position} radius={1.1 * radius} />
                {VisitedCityPoints}
                {HomeCityPoints}
                {HomeCityFlightArcs}
            </group >
        </PresentationControls>
    );
};