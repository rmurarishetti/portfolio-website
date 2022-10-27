import { useHorizontalScroll } from "../../../helpers";
import styles from './HScrollDiv.module.scss'

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