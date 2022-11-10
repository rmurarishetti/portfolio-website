import { useState } from 'react';
import { ArtCard } from '../../cards';
import { LightboxSwiper } from '../../swipers';
import styles from './GalleryWLightbox.module.scss'

function GalleryWLightbox({ artsData }) {
    const [index, setIndex] = useState(0)
    const [lightbox, setLightbox] = useState(false)

    return (
        <>
            <div className={styles.masonary}>
                {artsData.map((artData, i) => {
                    return (
                        <ArtCard key={artData.id} index={i} {...artData} setIndex={setIndex} setLightbox={setLightbox} />
                    )
                })}
            </div>
            {lightbox &&
                <div className={styles.lightbox}>
                    <div
                        className={styles.exitButton}
                        onClick={() => setLightbox(false)}>
                        ✕
                    </div>
                    <LightboxSwiper
                        artsData={artsData}
                        initialSlide={index}
                        setLightbox={setLightbox} />
                </div>
            }
        </>
    );
}

export default GalleryWLightbox;