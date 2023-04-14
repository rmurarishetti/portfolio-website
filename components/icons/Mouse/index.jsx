import styles from './Mouse.module.scss'

function MouseIcon({ type = 'left', active = false }) {
    return (
        <div className={[styles.mouse, active ? styles.interacted : ''].join(' ')}>
            <div className={styles.buttons}>
                <div className={[styles.left, type === 'left' ? styles.active : ''].join(' ')}></div>
                <div className={[styles.right, type === 'right' ? styles.active : ''].join(' ')}></div>
            </div>
            {type === 'scroll' && <div className={[styles.scroll, styles.active].join(' ')}></div>}
        </div>
    );
}

export default MouseIcon;