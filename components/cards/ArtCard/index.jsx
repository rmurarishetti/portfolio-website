import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from './ArtCard.module.scss'
import { Tag, DateDiv } from '../../badges';
import { rgbDataURL } from '../../../helpers/format';

function ArtCard({ id, title, date, mediums, image, hidden }) {

    // const [mobile, setMobile] = useState(window.innerWidth < 500)
    // useEffect(() => {
    //     function handleResize() {
    //         setMobile(window.innerWidth < 500)
    //     }
    //     window.addEventListener('resize', handleResize)
    //     return _ => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [window.innerWidth])

    return (
        <a className={[styles.artCard, hidden ? styles.hidden : ''].join(' ')}>
            <div className={styles.image}>
                <div className={styles.arrow}>⛶</div>
                <Image
                    src={image.href}
                    alt={image.alt}
                    placeholder={blur}
                    blurDataURL={rgbDataURL(126, 126, 126)}
                    objectFit='cover'
                    layout='fill' />
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <div className={styles.date}>
                        <DateDiv start={date} longDate />
                    </div>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
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

export default ArtCard