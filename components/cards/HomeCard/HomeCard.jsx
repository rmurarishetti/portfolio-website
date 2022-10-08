import styles from './HomeCard.module.scss'
import Tilt from 'react-parallax-tilt';

function HomeCard({ link, title, description, image }) {
    return (
        <Tilt tiltReverse glareEnable tiltMaxAngleX={10} tiltMaxAngleY={10} glareColor='#0070f3' glareMaxOpacity={0.5} glareBorderRadius={10} className={styles.card}>
            <a href={link} >
                <h2>{title} &rarr;</h2>
                <p>{description}</p>
            </a>
        </Tilt>
    )
}

export default HomeCard