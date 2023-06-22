import { useState } from 'react';
import { QuadraticBezierLine } from '@react-three/drei';
import { coordinates2cartesian } from '../../../../../../helpers/math';
import { Html } from '@react-three/drei';
import { DateDiv } from '../../../../../badges';
import styles from './CityLabel.module.scss'

function CityLabel({ city, color, globeRadius, globeRef, onClick }) {
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
                <div
                    onClick={onClick}
                    className={styles.cityLabel}
                    style={{
                        opacity: occluded ? 0 : 1,
                        backgroundColor: color + '10',
                        borderColor: color + '20',
                        transform: `scale(${occluded ? 0.25 : 1})`
                    }}>
                    <div className={styles.location}>
                        <div className={styles.city}>
                            {city.city}
                        </div>
                        <div className={styles.country}>
                            {city.countryEmoji}
                        </div>
                    </div>
                    <div className={styles.date}>
                        <DateDiv start={city.start} end={city.end} />
                    </div>
                    <div className={styles.description}>
                        {city.description}
                    </div>
                </div>
            </Html>
        </>
    );
}

export default CityLabel;