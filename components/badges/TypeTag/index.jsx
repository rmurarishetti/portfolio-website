import styles from './TypeTag.module.scss'

function TypeTag({ type }) {
    const typesDict = {
        "Engineering": styles.engineering,
        "Hardware": styles.hardware,
        "Computing": styles.computing,
    }


    return (
        <div className={[styles.tag, typesDict[type]].join(' ')}>
            {type}
        </div>
    );
}

export default TypeTag;