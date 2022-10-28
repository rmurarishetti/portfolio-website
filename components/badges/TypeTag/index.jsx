import styles from './TypeTag.module.scss'
import { projectTypeStyleClasses } from '../../../data/projectTypeStyleClasses';

function TypeTag({ type }) {


    return (
        <div className={[styles.tag, projectTypeStyleClasses(styles, type)].join(' ')}>
            {type}
        </div>
    );
}

export default TypeTag;