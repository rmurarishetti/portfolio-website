import styles from './LoaderPlaceholder.module.scss';

export default function LoaderPlaceholder({ }) {
    return (
        <div className={styles.loader}>
            <div className={styles.text}>3D Model Loading...</div>
        </div>
    );
}