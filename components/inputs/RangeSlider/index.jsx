import styles from './RangeSlider.module.scss';
import { useSpring, animated as a, config } from '@react-spring/three';

function RangeSlider({ value, min, max, step, onChange, onMouseDown, onMouseUp, label = null, displayValue = null, initValue = 0, children, changing = false, disabled = false }) {

    const initPercent = (initValue - min) / (max - min) * 100;
    const percent = (value - min) / (max - min) * 100;

    return (
        <div className={[styles.rangeSlider, changing && styles.changing, disabled && styles.disabled].join(' ')}>
            {children &&
                <div
                    className={styles.childrenContainer}
                >
                    {children}
                </div>
            }
            {label &&
                <span
                    className={styles.label}
                >
                    {label}
                </span>
            }
            <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack} />
                <div className={styles.sliderMidTick} />
                <div
                    className={styles.sliderInitTick}
                    style={{ left: `${initPercent}%` }}
                />
                <div
                    className={styles.sliderThumb}
                    style={{ left: `${percent}%` }}
                />
                {displayValue &&
                    <div
                        className={styles.sliderValue}
                        style={{ left: `${percent}%` }}
                    >
                        {displayValue}
                    </div>
                }
                <input
                    className={styles.customSlider}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={onChange}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                />
            </div>
        </div>
    );
}

export default RangeSlider;