import styles from './CommentDiv.module.scss';

function CommentPlaceholder() {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <div className={styles.imagePlaceholder}>
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <div className={styles.namePlaceholder} />
                    <div className={styles.seperator}>·</div>
                    <div className={styles.datePlaceholder} />
                </div>
                <div className={styles.messagePlaceholder} />
            </div>
        </div>
    );
}

export default CommentPlaceholder;