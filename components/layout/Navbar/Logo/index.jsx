import Link from 'next/link'
import { useRef, useState } from 'react'
import styles from './Logo.module.scss'

function Logo() {
    const [animation, setAnimation] = useState(false);
    const planeRef = useRef();

    const handleClick = () => {
        setAnimation(true);
    };

    const onAnimationEnd = () => {
        setAnimation(false);
    };

    return (
        <Link href="/">
            <a className={styles.navLogo} onClick={handleClick}
                onAnimationEnd={onAnimationEnd}>
                <div className={styles.background}>
                    <div className={styles.text}>rn</div>
                    <div className={styles.underline}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
                {animation && <div
                    ref={planeRef}
                    className={`${styles.plane} 
                    ${animation ? styles.animatePlane : ''}`}
                >
                    🛩️
                    <div className={styles.trail}></div>
                </div>}
            </a>
        </Link>
    );
}

export default Logo;