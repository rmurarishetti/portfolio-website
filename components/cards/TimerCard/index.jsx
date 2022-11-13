import { useCountdown } from "../../../helpers/hooks";

function TimerCard({ time, children }) {
    const seconds = useCountdown(time);
    return (
        <div className={styles.timer}>
            <div className={styles.emoji}></div>
            {children}
            <div className={styles.time}>{seconds} s</div>
        </div>
    );
}

export default TimerCard;