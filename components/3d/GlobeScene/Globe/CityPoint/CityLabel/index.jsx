import { useState } from 'react';
import { QuadraticBezierLine } from '@react-three/drei';
import { coordinates2cartesian } from '../../../../../../helpers/math';
import { Html } from '@react-three/drei';
import styles from './CityLabel.module.scss'

function CityLabel({ city, color, globeRadius, globeRef }) {
    const [occluded, occlude] = useState()

    const position = coordinates2cartesian(globeRadius, city.coordinates)
    const descriptionPosition = coordinates2cartesian(globeRadius + 0.1, [city.coordinates[0] - 5, city.coordinates[1] + 0])
    return (
        <>
            <QuadraticBezierLine
                start={position}
                end={descriptionPosition}
                castShadow={true}
                color={color}
                lineWidth={1}
            />
            <Html
                position={descriptionPosition}
                occlude={[globeRef]}
                onOcclude={occlude}>
                <div className={styles.cityLabel}
                    style={{
                        opacity: occluded ? 0 : 1,
                        backgroundColor: color + '10',
                        borderColor: color + '20',
                        transform: `scale(${occluded ? 0.25 : 1})`
                    }}>
                    {city.description}
                </div>
            </Html>
        </>
    );
}

export default CityLabel;