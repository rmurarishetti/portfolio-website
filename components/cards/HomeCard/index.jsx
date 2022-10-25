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
            glareMaxOpacity={0.7}
            glareBorderRadius={10}
            className={styles.card}>
            <Link href={link}>
                <a>
                    <h2>{emoji} {title} &rarr;</h2>
                    <p>{description}</p>
                </a>
            </Link>
        </Tilt>
    )
}

export default HomeCard