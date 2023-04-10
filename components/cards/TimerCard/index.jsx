import { useEffect, useState } from "react";
import { useCountDown } from "../../../helpers/hooks";
import styles from './TimerCard.module.scss'

function TimerCard({ seconds, children, handlePause, counter, paused }) {
    const widthPercent = 100 * counter / seconds
    return (
        <div className={[styles.timer, paused ? styles.paused : ''].join(' ')}>
            <div className={styles.bg} style={{ width: `${widthPercent}%` }}></div>
            <div className={styles.text}>
                {/* <div className={styles.emoji}>⏳</div> */}
                <div>&nbsp;{children}&nbsp;</div>
                <div className={styles.time}>{counter}s</div>
                <div className={styles.pause} onClick={handlePause}>{paused ? '\u23F5' : '\u23F8'}</div>
            </div>
        </div>
    );
}

export default TimerCard;