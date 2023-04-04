import styles from './CommentDiv.module.scss';

function CommentPlaceholder() {
    return (
        <div className={styles.container}>
            <div className={styles.messagePlaceholder} />
            <div className={styles.footer}>
                <div className={styles.person}>
                    <div className={styles.iconPlaceholder} />
                    <div className={styles.namePlaceholder} />
                </div>
                <div className={styles.seperator}>/</div>
                <div className={styles.datePlaceholder} />
            </div>
        </div>
    );
}

export default CommentPlaceholder;