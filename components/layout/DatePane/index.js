import styles from './DatePane.module.scss'
import { DateDiv } from '../../badges';

function DatePane({ start, end, cardCount }) {

    let style = styles.long
    if (cardCount <= 6) {
        style = styles.medium

        if (cardCount <= 3) {
            style = styles.short
        }
    }

    const description = (start || end) ? `Showing ${cardCount} projects between:` : 'No projects found.'

    return (
        <div className={[styles.datePane, style].join(' ')}>
            <div className={styles.description}>{description}</div>
            {start && <div className={styles.start}>{<DateDiv start={start} />}</div>}
            {(start || end) && <div className={styles.line}></div>}
            {end && <div className={styles.end}>{<DateDiv start={end} />}</div>}
        </div>
    );
}

export default DatePane;