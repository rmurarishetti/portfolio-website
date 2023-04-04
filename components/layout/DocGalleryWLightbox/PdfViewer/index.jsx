import { useState, useEffect, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from './PdfViewer.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer({ href }) {
    // const ref = useRef(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(null)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    }, []);

    useEffect(() => {
        windowSize.width < 550 ? setWidth(0.95 * windowSize.width) : setWidth(null)
        setHeight(windowSize.height - 170)
    }, [windowSize])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39 && pageNumber < numPages) {
                changePage(1)
            }
            else if (e.keyCode === 37 && pageNumber > 1) {
                changePage(-1)
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [pageNumber, numPages]);

    return (
        <div>
            <Document
                file={href}
                onLoadSuccess={onDocumentLoadSuccess}
                className={styles.document}>
                <Page
                    pageNumber={pageNumber}
                    className={styles.page}
                    height={height}
                    width={width}
                />
            </Document>
            <div className={styles.footer}>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <div className={styles.arrows}>
                    <button
                        className={styles.leftArrow}
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={() => changePage(-1)}
                    >
                        &larr;
                    </button>
                    <button
                        className={styles.rightArrow}
                        type="button"
                        disabled={pageNumber >= numPages}
                        onClick={() => changePage(1)}
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PdfViewer;