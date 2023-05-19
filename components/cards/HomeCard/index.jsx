import styles from './HomeCard.module.scss'
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';

function HomeCard({ link, title, emoji, description }) {

    return (
        <Tilt
            tiltReverse
            glareEnable
            scale={1.05}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareColor='var(--color-accent-primary)'
            glareMaxOpacity={0.3}
            glareBorderRadius={10}
            glarePosition="all"
            transitionSpeed={500}
            className={styles.card}>
            <Link href={link}>
                <a>
                    {/* <h2>{emoji} {title} &rarr;</h2> */}
                    <div className={styles.header}>
                        {/* <div className={[styles.emoji, styles[emoji]].join(' ')}>{emoji}</div> */}
                        <div className={styles.title}>{title}</div>
                        <div className={styles.arrow}>&rarr;</div>
                    </div>
                    <p>{description}</p>
                </a>
            </Link>
        </Tilt>
    )
}

export default HomeCard