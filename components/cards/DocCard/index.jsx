import styles from './DocCard.module.scss'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function DocCard({ index, name, href, hidden, setIndex = null, setLightbox = null }) {
    const handleClick = () => {
        if (setIndex) { setIndex(index) }
        if (setLightbox) { setLightbox(true) }
    }

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <a className={[styles.docCard, hidden ? styles.hidden : ''].join(' ')}>
            <div
                className={styles.image}
                onClick={handleClick}>
                <div className={styles.arrow}>&uarr;</div>
                <Document file={href} onLoadSuccess={onDocumentLoadSuccess} className={styles.document}>
                    <Page pageNumber={1} className={styles.page} />
                </Document>
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        {name}
                    </h2>
                </div>
            </div>
        </a>
    )
}

export default DocCard;