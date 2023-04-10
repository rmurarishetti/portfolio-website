import Link from 'next/link'
import { useRef, useState } from 'react'
import styles from './Logo.module.scss'

function Logo() {
    const [animation, setAnimation] = useState(false);
    const [pilotAnimation, setPilotAnimation] = useState(false);
    const planeRef = useRef();

    const handleClick = () => {
        setAnimation(true);
        setTimeout(() => {
            setPilotAnimation(true);
        }, 800);
    };

    const onAnimationEnd = () => {
        setAnimation(false);
    };

    const onPilotAnimationEnd = () => {
        setPilotAnimation(false);
    };

    return (
        <Link href="/404">
            <a className={styles.navLogo} onClick={handleClick}
            >
                <div className={styles.background}>
                    <div className={styles.text}>rn</div>
                    <div className={styles.underline}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
                {animation && <div
                    ref={planeRef}
                    onAnimationEnd={onAnimationEnd}
                    className={`${styles.plane} 
                    ${animation ? styles.animatePlane : ''}`}
                >
                    🛩️
                    <div className={styles.trail}></div>
                </div>}
                {pilotAnimation && <div className={styles.pilot} onAnimationEnd={onPilotAnimationEnd}>🪂</div>}
            </a>
        </Link>
    );
}

export default Logo;