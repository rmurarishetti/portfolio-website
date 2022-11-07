import Head from 'next/head';
import styles from '../styles/Graphics.module.scss'

function Graphics() {
    return (

        <>
            <Head>
                <title>Rohit Nag | Graphics</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.graphicsPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>🖼</div>
                        <div className={styles.text}>Graphics</div>
                    </div>
                    <p>Some my designed posters and logos.</p>
                </div>
            </div>
        </>
    );
}

export default Graphics;