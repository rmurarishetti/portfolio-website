import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Graphics.module.scss'
import { graphicsData } from '../data/graphicsData';
import { GalleryWLightbox } from '../components/layout';

function Graphics() {
    const [logos, setLogos] = useState(graphicsData.filter(graphic => graphic.type === 'logo'));
    const [posters, setPosters] = useState(graphicsData.filter(graphic => graphic.type === 'poster'));


    // sort logos and posters by date:
    useEffect(() => {
        logos.sort((a, b) => b.date - a.date)
        posters.sort((a, b) => b.date - a.date)
    }, [logos, posters]);


    return (
        <>
            <Head>
                <title>Rohit Nag | Graphics</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
                <meta name="description" content="Gallery of my graphics." />
            </Head>
            <div className={styles.graphicsPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {/* <div className={styles.emoji}>🖼️</div> */}
                        <div className={styles.text}>Graphics</div>
                    </div>
                    <p>A gallery of the logos and posters I&apos;ve designed.</p>
                </div>
                <div className={styles.block}>
                    <h2>Posters</h2>
                    <GalleryWLightbox data={posters} />
                </div>
                <div className={styles.block}>
                    <h2>Logos</h2>
                    <GalleryWLightbox data={logos} />
                </div>
            </div>
        </>
    );
}

export default Graphics;