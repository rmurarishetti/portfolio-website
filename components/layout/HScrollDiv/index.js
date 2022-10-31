import { useHorizontalScroll } from '../../../helpers/ui';
import styles from './HScrollDiv.module.scss';
import { useMemo } from "react";

export const HScrollDiv = ({ width = '100%', children }) => {
    const scrollRef = useHorizontalScroll();
    return (
        <div className={styles.container}>
            <div className={styles.fade}></div>
            <div ref={scrollRef} className={styles.scroll}>
                <div className={styles.padding} />
                {children}
                <div className={styles.padding} />
            </div>
        </div>
    );
};