import { useEffect } from 'react';
import { useState } from 'react';
import styles from './TagFilterToggle.module.scss'

function TagFilterToggle({ children, onClick, forceDisable }) {
    const [active, setActive] = useState(false)

    useEffect(() => {
        forceDisable ? setActive(false) : null
    }, [forceDisable])

    const handleClick = () => {
        onClick()
        setActive(prevState => !prevState)
    }


    return (
        <div className={[styles.toggleTag, active ? styles.active : ''].join(' ')} onClick={handleClick}>
            {children}
        </div>
    );
}

export default TagFilterToggle;