import { useEffect } from 'react';
import { useState } from 'react';
import styles from './TagFilterToggle.module.scss'

function TagFilterToggle({ children, onClick, forceDisable, selectable }) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        forceDisable ? setActive(false) : null
    }, [forceDisable])

    const handleClick = () => {
        if (selectable) {
            onClick()
            setActive(prevState => !prevState)
        }
    }


    return (
        <div className={[styles.toggleTag, active ? styles.active : '', !selectable ? styles.disabled : ''].join(' ')} onClick={handleClick}>
            {children}
        </div>
    );
}

export default TagFilterToggle;