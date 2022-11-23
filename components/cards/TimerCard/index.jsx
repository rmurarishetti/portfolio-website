import { useEffect, useState } from "react";
import { useCountDown } from "../../../helpers/hooks";
import styles from './TimerCard.module.scss'

function TimerCard({ seconds, children, handlePause }) {
    const [counter, start, pause, reset] = useCountDown(seconds, 1000);
    const [paused, setPaused] = useState(true)
    useEffect(() => {
        setPaused(false)
    }, [])
    useEffect(() => {
        paused ? pause() : start()
    }, [paused, pause, start])
    const onClick = () => {
        handlePause()
        setPaused((prev) => !prev)
    }
    const widthPercent = 100 * counter / seconds
    return (
        <div className={[styles.timer, paused ? styles.paused : ''].join(' ')}>
            <div className={styles.bg} style={{ width: `${widthPercent}%` }}></div>
            <div className={styles.text}>
                <div className={styles.emoji}>⏳</div>
                <div>&nbsp;{children}&nbsp;</div>
                <div className={styles.time}>{counter}s&nbsp;</div>
                <div className={styles.pause} onClick={onClick}>{paused ? '▶️' : '⏸️'}</div>
            </div>
        </div>
    );
}

export default TimerCard;