import { useState, useEffect } from 'react';
import { ArtCard } from '../../cards';
import { LightboxSwiper } from '../../swipers';
import styles from './GalleryWLightbox.module.scss'

function GalleryWLightbox({ data, showDetails = true }) {
    const [index, setIndex] = useState(0)
    const [lightbox, setLightbox] = useState(false)
    const [lightboxTransparent, setLightboxTransparent] = useState(false)

    useEffect(() => {
        setLightboxTransparent(false)
    }, [lightbox])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 27) {
                setLightbox(false)
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className={styles.masonary}>
                {data.map((artData, i) => {
                    return (
                        <ArtCard key={i} index={i} {...artData} setIndex={setIndex} setLightbox={setLightbox} showDetails={showDetails} />
                    )
                })}
            </div>
            {lightbox &&
                <div className={[styles.lightbox, lightboxTransparent ? styles.transparentMode : ''].join(' ')}>
                    <div
                        className={styles.exitButton}
                        onPointerEnter={() => setLightboxTransparent(true)}
                        onPointerLeave={() => setLightboxTransparent(false)}
                        onClick={() => setLightbox(false)}>
                        ✕
                    </div>
                    <LightboxSwiper
                        data={data}
                        initialSlide={index}
                        setLightbox={setLightbox}
                        showDetails={showDetails} />
                </div>
            }
        </>
    );
}

export default GalleryWLightbox;