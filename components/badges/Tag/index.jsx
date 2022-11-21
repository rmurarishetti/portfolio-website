import styles from './Tag.module.scss'

function Tag({ children, noShadow = true }) {
    return (
        <div className={[styles.tag, noShadow ? styles.noShadow : ''].join(' ')} >
            {children}
        </div>
    );
}

export default Tag;