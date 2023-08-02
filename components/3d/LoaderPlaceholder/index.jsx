import styles from './LoaderPlaceholder.module.scss';
import { useProgress, Html } from '@react-three/drei';


export default function LoaderPlaceholder({ }) {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return (
        <Html
            as='div'
            wrapperClass={styles.loader}
        >
            <div className={styles.text}>{progress} % loaded</div>
        </Html>
    );
}