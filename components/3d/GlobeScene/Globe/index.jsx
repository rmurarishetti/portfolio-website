import { useRef, useState, useEffect, useMemo, Suspense, memo, useCallback } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { PresentationControls, useCursor, OrbitControls } from '@react-three/drei'
import { GlowSphere } from './GlowSphere';
import { CityPoint } from './CityPoint';
import { FlightArc } from './FlightArc';
import { CloudSphere } from './CloudSphere';
import { Country } from './Country';
import { travelData } from '../../../../data/travelData';
import { useSpring, animated as a } from '@react-spring/three';

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

    const findCity = useCallback((cityName) => {
        const city = travelData.find((city) => city.city === cityName);
        return city;
    }, []);

    useCursor(hovered, 'grab', 'auto');
    useCursor(active, 'grabbing', 'auto');

    useFrame((_, delta) => {
        const dThetaY = hovered ? delta / 30 : delta / 20;
        groupRef.current.rotation.y += dThetaY;
    });

    const [texture, spec, normal] = useLoader(TextureLoader, [makeUrl(theme === 'light' ? 'earth_day' : 'earth_night'), makeUrl('earth_spec'), makeUrl('earth_normal')]);

    // Extract unique countries from homeCities and visitedCities
    const homeCountries = Array.from(new Set(homeCities.map(city => city.country)));
    const visitedCountries = Array.from(new Set(visitedCities.map(city => city.country).filter(country => !homeCountries.includes(country))));

    const HomeCountryPolygons = useMemo(() => homeCountries?.map((country) => (
        <Country key={country} name={country} radius={radius * 1.01} type='home' theme={theme} />
    )), [homeCountries, radius, theme]);

    const VisitedCountryPolygons = useMemo(() => visitedCountries?.map((country) => (
        <Country key={country} name={country} radius={radius * 1.005} type='visited' theme={theme} />
    )), [visitedCountries, radius, theme]);

    const HomeCityPoints = useMemo(() => homeCities?.map((city) => (
        <CityPoint key={city.city} globeRadius={radius * 1.01} city={city} theme={theme} type="home" globeRef={globeRef} />
    )), [homeCities, radius, theme]);

    const VisitedCityPoints = useMemo(() => visitedCities?.map((city) => (
        <CityPoint key={city.city} globeRadius={radius * 1.005} city={city} theme={theme} type="visited" globeRef={globeRef} />
    )), [visitedCities, radius, theme]);

    const HomeCityFlightArcs = useMemo(() => {
        if (!homeCities) return [];
        return homeCities.slice(0, -1).map((city1, i) => (
            <FlightArc
                key={city1.city + homeCities[i + 1].city}
                globeRadius={radius * 1.01}
                city1={city1}
                city2={homeCities[i + 1]}
                theme={theme}
                type="home"
            />
        ));
    }, [homeCities, radius, theme]);

    // const VisitedCityFlightArcs = useMemo(() => {
    //     if (!visitedCities) return [];
    //     return visitedCities.map((city) => (
    //         <FlightArc
    //             key={city.city}
    //             globeRadius={radius * 1.012}
    //             city1={city}
    //             city2={findCity(city.travelledFrom)}
    //             theme={theme}
    //             type="visited"
    //         />
    //     ));
    // }, [visitedCities, radius, theme, findCity]);

    const handlePointer = useCallback((enter, leave) => {
        setHover(enter);
        setActive(leave);
    }, []);

    const { sphereColor } = useSpring({
        sphereColor: theme === 'light' ? '#5C697E' : '#161C41',
        config: { mass: 1, tension: 500, friction: 50 }
    });

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
                <Suspense fallback={
                    <a.mesh>
                        <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
                        <a.meshStandardMaterial color={sphereColor} attach="material" />
                    </a.mesh>
                }>
                    {HomeCountryPolygons}
                    {VisitedCountryPolygons}
                    {HomeCityFlightArcs}
                </Suspense>
                <a.mesh ref={globeRef}>
                    <sphereGeometry attach="geometry" args={[radius, 64, 64]} />
                    <CloudSphere position={position} radius={1.03 * radius} />
                    <Suspense fallback={<a.meshStandardMaterial color={sphereColor} attach="material" />}>
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
                </a.mesh>
                <Suspense fallback={null}>
                    {VisitedCityPoints}
                    {HomeCityPoints}
                </Suspense>
            </group>
            <OrbitControls enabled={hovered || mobile} enableRotate={false} maxDistance={5} minDistance={4} enablePan={false} />
        </PresentationControls>
    );
};