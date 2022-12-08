import { useState, useEffect, useRef } from 'react';
import { DocCard } from '../../cards';
import styles from './DocGalleryWLightbox.module.scss';
// import { Document, Page } from 'react-pdf';
import PdfViewer from './PdfViewer';

function DocGalleryWLightbox({ docsData }) {
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    const [lightbox, setLightbox] = useState(false)
    const [lightboxTransparent, setLightboxTransparent] = useState(false)

    useEffect(() => {
        setLightboxTransparent(false)
    }, [lightbox])

    return (
        <>
            <div className={styles.masonary}>
                {docsData.map((docData, i) => {
                    return (
                        <DocCard key={i} index={i} {...docData} setIndex={setIndex} setLightbox={setLightbox} />
                    )
                })}
            </div>
            {lightbox &&
                <div
                    className={[styles.lightbox, lightboxTransparent ? styles.transparentMode : ''].join(' ')}>
                    <div
                        className={styles.exitButton}
                        onPointerEnter={() => setLightboxTransparent(true)}
                        onPointerLeave={() => setLightboxTransparent(false)}
                        onClick={() => setLightbox(false)}>
                        ✕
                    </div>
                    <div className={styles.doc} ref={ref}>
                        <PdfViewer href={docsData[index].href} />
                    </div>
                </div>
            }
        </>
    );
}

export default DocGalleryWLightbox;