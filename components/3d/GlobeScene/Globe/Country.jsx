import { Suspense, useMemo, useState } from 'react';
import countryPolyData from '../../../../data/countryPolyData.json';
import { ConicPolygonGeometry } from '../../../../helpers/threeConicPolygon';
import { colors } from '../../../../helpers/format';
import * as THREE from 'three';
import { useSpring, animated as a, config } from '@react-spring/three';

// calculate vertices and faces
const getPolygonGeometries = (coordinates, geometryType, radius) => {
    const polygonGeometries = [];

    let polygons = geometryType === "Polygon" ? [coordinates] : coordinates; // if it's a Polygon, wrap it in an array to have the same structure as MultiPolygon

    polygons.forEach(coords => {
        const polygonGeometry = new ConicPolygonGeometry(coords, 0, radius, true, true, true, 2);
        polygonGeometries.push(polygonGeometry);
    });

    return polygonGeometries;
};

export function Country({ name, radius, type = 'home', theme = 'light' }) {
    const countryData = countryPolyData.features.find(
        (feature) => feature.properties.name_long === name
    );
    const polygons = useMemo(() => {
        if (countryData) {
            let polygonGeometries = getPolygonGeometries(countryData.geometry.coordinates, countryData.geometry.type, radius);
            return polygonGeometries;
        }
        return [];
    }, [countryData, radius]);

    const { color, opacity } = useSpring({
        color: type === 'home' ? colors[theme].flightArc.home : colors[theme].flightArc.visited,
        opacity: type === 'home' ?
            theme === 'dark' ? 0.4 : 0.5
            : theme === 'dark' ? 0.5 : 0.3,
        config: config.molasses
    })

    return (
        <group>
            <Suspense fallback={null}>
                {polygons.map((polygonGeometry, i) => (
                    <a.mesh
                        key={polygonGeometry.uuid}
                        geometry={polygonGeometry}
                    >
                        <a.meshBasicMaterial attachArray="material" color={color} opacity={0.7} transparent side={THREE.DoubleSide} />
                        <a.meshBasicMaterial attachArray="material" color={color} opacity={opacity} transparent side={THREE.DoubleSide} />
                        <a.meshBasicMaterial attachArray="material" color={color} opacity={opacity} transparent side={THREE.DoubleSide} />
                    </a.mesh>
                ))}
            </Suspense>
        </group>
    );
}