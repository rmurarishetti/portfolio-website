import styles from './DatePane.module.scss'
function DatePane({ start, end, cardCount }) {
    const options = { year: '2-digit', month: 'short' };
    const startString = start instanceof Date ? start.toLocaleDateString("en-US", options) : '';
    const endString = end instanceof Date ? end.toLocaleDateString("en-US", options) : '';

    let style = styles.long
    if (cardCount <= 6) {
        style = styles.medium

        if (cardCount <= 3) {
            style = styles.short
        }
    }

    const description = (startString || endString) ? `Showing ${cardCount} projects between:` : 'No projects found.'

    return (
        <div className={[styles.datePane, style].join(' ')}>
            <div className={styles.description}>{description}</div>
            <div className={styles.start}>{startString}</div>
            {(startString || endString) && <div className={styles.line}></div>}
            <div className={styles.end}>{endString}</div>
        </div>
    );
}

export default DatePane;