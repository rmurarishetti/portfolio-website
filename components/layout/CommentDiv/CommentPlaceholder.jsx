import styles from './CommentDiv.module.scss';
import { useAOS } from '../../../helpers/hooks';

function CommentPlaceholder() {
    useAOS()
    return (
        <div className={styles.container} data-aos='fade-up'>
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