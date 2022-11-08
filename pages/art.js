import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Art.module.scss';

function Art() {
    const [index, setIndex] = useState(0)
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
                <div className={styles.masonary}></div>
            </div>
        </>
    );
}

export default Art;