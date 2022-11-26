import Image from 'next/image';
import styles from './ArtCard.module.scss'
import { Tag, DateDiv } from '../../badges';

function ArtCard({ index, title, date, mediums, image, hidden, setIndex = null, setLightbox = null, showDetails = true }) {

    const handleClick = () => {
        if (setIndex) { setIndex(index) }
        if (setLightbox) { setLightbox(true) }
    }

    return (
        <a className={[styles.artCard, hidden ? styles.hidden : ''].join(' ')}>
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
                    {mediums.map((medium, i) => {
                        return (
                            <div key={i}><Tag noShadow>{medium}</Tag></div>
                        )
                    })}
                </div>
            </div>}
        </a>
    )
}

export default ArtCard