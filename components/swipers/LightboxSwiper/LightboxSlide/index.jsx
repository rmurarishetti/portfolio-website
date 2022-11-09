import Image from 'next/image';
import { useState } from 'react';
import styles from './LightboxSlide.module.scss'
import { Tag, DateDiv } from '../../../badges';
import { rgbDataURL } from '../../../../helpers/format';

function LightboxSlide({ title, date, mediums, image }) {
    const [ratio, setRatio] = useState(1.1) // default to 16:9
    return (
        <a className={styles.slide}>
            <div className={styles.image}>
                <Image
                    src={image.href}
                    alt={image.alt}
                    placeholder={blur}
                    blurDataURL={rgbDataURL(126, 126, 126)}
                    objectFit='contain'
                    layout="fill" />
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <div className={styles.date}>
                        <DateDiv start={date} longDate />
                    </div>
                </div>
                <div className={styles.tags}>
                    {mediums.map((medium, i) => {
                        return (
                            <div key={i}><Tag noShadow>{medium}</Tag></div>
                        )
                    })}
                </div>
            </div>
        </a>
    )
}

export default LightboxSlide