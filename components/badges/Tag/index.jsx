import styles from './Tag.module.scss'

function Tag({ children }) {
    return (
        <div className={styles.tag}>
            {children}
        </div>
    );
}

export default Tag;