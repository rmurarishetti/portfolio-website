import styles from './HomeCard.module.scss'
import Tilt from 'react-parallax-tilt';

function HomeCard({ link, title, description, image }) {
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
            <a href={link} >
                <h2>{title} &rarr;</h2>
                <p>{description}</p>
            </a>
        </Tilt>
    )
}

export default HomeCard