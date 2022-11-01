import { useRef, useEffect, useState } from 'react';
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Color, Mesh } from 'three'
import { PresentationControls } from '@react-three/drei'


import { GlowSphere } from './GlowSphere';
import { CityPoint } from './CityPoint';
import { FlightArc } from './FlightArc';

export function Globe({ position, theme, radius, homeCities, visitedCities, handleCityDescription }) {
    const mesh = useRef(null);

    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        const dThetaY = hovered ? delta / 30 : delta / 10;
        mesh.current.rotation.y += dThetaY;
    });

    useEffect(() => {
        document.body.style.cursor = hovered ? 'grab' : 'auto'
    }, [hovered]);

    const makeUrl = (file) => `./textures/${file}.jpg`;
    const [texture, bump, spec] = useLoader(TextureLoader, [makeUrl(theme === 'light' ? 'earth' : 'earth_night'), makeUrl('earth_bump'), makeUrl('earth_spec')]);

    const HomeCityPoints = homeCities ? homeCities.map((city) => {
        return <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="home" handleCityDescription={handleCityDescription} />;
    }) : undefined;

    const VisitedCityPoints = visitedCities ? visitedCities.map((city) => {
        return <CityPoint key={city.city} globeRadius={radius} city={city} theme={theme} type="visited" handleCityDescription={handleCityDescription} />;
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
            global={false} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            speed={2} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[-Math.PI / 6, Math.PI / 3.5]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 200, friction: 20 }} // Spring config
        >
            <mesh
                position={position}
                ref={mesh}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}>
                <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
                <meshPhongMaterial attach="material" map={texture} bumpMap={bump} bumpScale={0.05} specularMap={spec} specular={new Color('#909090')} shininess={5} />
                <GlowSphere theme={theme} position={position} radius={1.1 * radius} />
                {VisitedCityPoints}
                {HomeCityPoints}
                {HomeCityFlightArcs}
            </mesh >
        </PresentationControls>
    );
};