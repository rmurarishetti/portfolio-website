import { Suspense, useMemo, useState } from 'react';
import countryPolyData from '../../../../data/countryPolyData.json';
import { ConicPolygonGeometry } from '../../../../helpers/threeConicPolygon';
import { colors } from '../../../../helpers/format';
import * as THREE from 'three';

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

    const color = type === 'home' ? colors[theme].flightArc.home : colors[theme].flightArc.visited;
    const opacity = type === 'home' ?
        theme === 'dark' ? 0.4 : 0.5
        : theme === 'dark' ? 0.5 : 0.3;

    const materials = [
        new THREE.MeshBasicMaterial({ color, opacity: 0.7, transparent: true, side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color, opacity, transparent: true, side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ color, opacity, transparent: true, side: THREE.DoubleSide }),
    ];

    return (
        <group>
            <Suspense fallback={null}>
                {polygons.map((polygonGeometry, i) => (
                    <mesh
                        key={polygonGeometry.uuid}
                        geometry={polygonGeometry}
                        material={materials}
                    />
                ))}
            </Suspense>
        </group>
    );
}