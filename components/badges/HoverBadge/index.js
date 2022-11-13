import styles from './HoverBadge.module.scss'

function HoverBadge({ children, hoverText }) {
    return (
        <>
            <div className={styles.text}>
                {children}
                <div className={styles.hoverText}>{hoverText}</div>
            </div>
        </>
    );
}

export default HoverBadge;