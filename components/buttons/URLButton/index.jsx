import styles from './URLButton.module.scss';


function URLButton({ name, href }) {
    return (
        <a href={href} target='_blank' rel='noreferrer' className={styles.container}>
            <div className={styles.arrow}>↗</div>
            <div className={styles.text}>{name}</div>
        </a>
    );
}

export default URLButton;