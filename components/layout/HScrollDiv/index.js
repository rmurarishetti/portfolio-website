import { useHorizontalScroll } from "../../../helpers";
import styles from './HScrollDiv.module.scss'

export const HScrollDiv = ({ width = '100%', children }) => {
    const scrollRef = useHorizontalScroll();
    return (
        <div className={styles.container}>
            <div className={styles.fade}></div>
            <div ref={scrollRef} className={styles.scroll}>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                <div>
                    I will definitely overflow due to the small width of my parent container.
                </div>
                {children}
            </div>
        </div>
    );
};