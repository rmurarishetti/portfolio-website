import Image from 'next/image';
import { useState } from 'react';
import styles from './LightboxSlide.module.scss'
import { Tag, DateDiv } from '../../../badges';

function LightboxSlide({ title, date, image, showDetails = True, mediums = null, technologies = null }) {
    const [ratio, setRatio] = useState(1.1) // default to 16:9
    const tags = mediums ? mediums : technologies
    return (
        <a className={styles.slide}>
            <div className={styles.image}>
                <Image
                    src={image.href}
                    alt={image.alt}
                    objectFit='contain'
                    layout="fill" />
            </div>
            {showDetails && <div className={styles.footer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <div className={styles.date}>
                        <DateDiv start={date} longDate />
                    </div>
                </div>
                <div className={styles.tags}>
                    {tags.map((tag, i) => {
                        return (
                            <div key={i}><Tag noShadow>{tag}</Tag></div>
                        )
                    })}
                </div>
            </div>}
        </a>
    )
}

export default LightboxSlide