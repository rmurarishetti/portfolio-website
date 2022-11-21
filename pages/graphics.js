import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/Graphics.module.scss'
import { graphicsData } from '../data/graphicsData';
import { DateDiv } from '../components/badges';
import { RatioImage } from '../components/layout';

function Graphics() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () =>
            setWidth(ref.current.offsetWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Rohit Nag | Graphics</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.graphicsPage} ref={ref}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>🖼</div>
                        <div className={styles.text}>Graphics</div>
                    </div>
                    <p>Some my posters, infographics and logos.</p>
                </div>
                <div className={styles.grid}>
                    {graphicsData.map(graphic => {
                        return (
                            <div className={styles.graphicCard} key={graphic.id}>
                                <div className={styles.image}>
                                    <RatioImage
                                        src={graphic.image.href}
                                        alt={graphic.image.alt}
                                        width={width} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Graphics;