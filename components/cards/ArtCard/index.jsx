import Image from 'next/image';
import Link from 'next/link';
import styles from './ArtCard.module.scss'
import { Tag, DateDiv } from '../../badges';
import { useAOS } from '../../../helpers/hooks';

export default function ArtCard({ index, title, date, image, hidden, setIndex = null, setLightbox = null, showDetails = true, mediums = null, technologies = null }) {
    useAOS()

    const handleClick = () => {
        if (setIndex) { setIndex(index) }
        if (setLightbox) { setLightbox(true) }
    }

    const tags = mediums ? mediums : technologies

    return (
        <a className={[styles.artCard, hidden ? styles.hidden : ''].join(' ')} data-aos='fade-up'>
            <div
                className={styles.image}
                onClick={handleClick}>
                <div className={styles.arrow}>&uarr;</div>
                <Image
                    src={image.href}
                    alt={image.alt}
                    objectFit='cover'
                    layout='fill' />
            </div>
            {showDetails && <div className={styles.footer}>
                <div className={styles.text}>
                    <div className={styles.date}>
                        <DateDiv start={date} longDate />
                    </div>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
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