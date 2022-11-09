import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Art.module.scss';
import { ArtCard } from '../components/cards';
import { artsData } from '../data/artsData';

function Art() {
    const [index, setIndex] = useState(0)

    const [artworks, setArtworks] = useState(artsData)

    useEffect(() => {
        artworks.sort((a, b) => b.date - a.date)
    }, [artworks]);


    return (
        <>
            <Head>
                <title>Rohit Nag | Art</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.artPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>🖌️</div>
                        <div className={styles.text}>Artwork</div>
                    </div>
                    <p>A gallery of my recent art.</p>
                </div>
                <div className={styles.masonary}>
                    {artworks.map((artData) => {
                        return (
                            <ArtCard key={artData.id} {...artData} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Art;