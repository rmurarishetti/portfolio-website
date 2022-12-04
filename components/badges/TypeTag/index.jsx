import styles from './TypeTag.module.scss'

function TypeTag({ type }) {
    console.log(type.toLowerCase())
    const formattedType = type.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '')
    const style = {
        color: `var(--color-${formattedType})`,
    }

    return (
        <div
            className={styles.tag}
            style={style}>
            {type}
        </div>
    );
}

export default TypeTag;