import styles from './IconButton.module.scss'
import { useAOS } from "../../../helpers/hooks";

function IconButton({ iconPath, active, id, handleSelected, animationDelay }) {
    useAOS()

    const aos = animationDelay ?
        { 'data-aos': 'fade-up', 'data-aos-delay': animationDelay } :
        { 'data-aos': 'fade-up' }

    return (
        <div
            className={[styles.iconButton, active ? styles.active : ''].join(' ')}
            onClick={() => handleSelected(id)}
        >
            <img src={iconPath} alt={'logo'} className={styles.icon} {...aos}></img>
        </div >
    );
}

export default IconButton;