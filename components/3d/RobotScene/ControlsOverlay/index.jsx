import { useState, useEffect, useMemo, useRef } from 'react';
import styles from './ControlsOverlay.module.scss';
import { MouseIcon, ComputerKeyIcon } from '../../../icons';
import { useCorrectedTheme } from '../../../../helpers/hooks';
import { RangeSlider } from '../../../inputs';

function ControlsOverlay({ thetas, setThetas, thetasReset, thetaRanges, isDraggingSlider, setIsDraggingSlider, followTarget, setFollowTarget, leftClicked, rightClicked, scrolled, resetCameraActive, showWorkspace, setShowWorkspace, activeKey, activeMotors, targetRef, targetMatrixInit, resetMotorsActive, resetTargetActive, mobileLayout = false, handleCameraReset }) {

    function setThetaI(i, angle) {
        const new_thetas = [...thetas];
        new_thetas[i] = angle;
        setThetas(new_thetas);
    }

    const handleThetasReset = () => {
        setThetas(thetasReset);
        setFollowTarget(false);
    }

    const handleTargetReset = () => {
        if (targetRef.current) {
            targetRef.current.matrix.copy(targetMatrixInit);
        }
    }

    const notAllowed = followTarget && activeMotors.length > 0 && (activeKey !== null || isDraggingSlider);

    return (
        <div className={styles.controls}>
            <div className={[styles.controlsInfo].join(' ')}>
                <div className={styles.label}>Camera Controls</div>
                <div className={[styles.controlsInfoItem, leftClicked ? styles.active : ''].join(' ')}>
                    <MouseIcon type='left' active={leftClicked} />
                    <span>Rotate</span>
                </div>
                <div className={[styles.controlsInfoItem, rightClicked ? styles.active : ''].join(' ')}>
                    <MouseIcon type='right' active={rightClicked} />
                    <span>Pan</span>
                </div>
                <div className={[styles.controlsInfoItem, scrolled ? styles.active : ''].join(' ')}>
                    <MouseIcon type='scroll' active={scrolled} />
                    <span>Zoom</span>
                </div>
                <div className={[styles.button, styles.controlsInfoItem, resetCameraActive ? styles.active : ''].join(' ')} onClick={handleCameraReset}>
                    <ComputerKeyIcon active={resetCameraActive} char='C' />
                    <span>Reset Camera</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.label}>
                    Robot Controls
                </div>

                <div className={[styles.button, styles.toggle, showWorkspace ? styles.active : ''].join(' ')} onClick={() => setShowWorkspace(prev => !prev)}>
                    <div className={styles.keyContainer}>
                        <ComputerKeyIcon char='W' />
                    </div>
                    <span>Show Workspace</span>
                </div>
                <div className={[styles.button, styles.toggle, followTarget && styles.active, notAllowed && styles.highlighted].join(' ')} onClick={() => setFollowTarget(prev => !prev)}>
                    <div className={styles.keyContainer}>
                        <ComputerKeyIcon char='T' />
                    </div>
                    <span>Follow Target</span>
                </div>
                <div className={[styles.button, styles.ressetButton, resetTargetActive && styles.active].join(' ')} onClick={handleTargetReset}>
                    <div className={styles.keyContainer}>
                        <ComputerKeyIcon char='R' active={resetTargetActive} />
                    </div>
                    <span>Reset Target</span>
                </div>
                <div className={[styles.button, styles.ressetButton, resetMotorsActive && styles.active].join(' ')} onClick={handleThetasReset}>
                    <div className={styles.keyContainer}>
                        <ComputerKeyIcon char='M' active={resetMotorsActive} />
                    </div>
                    <span>Reset Motors</span>
                </div>
                {mobileLayout &&
                    <div className={[styles.button, styles.ressetButton, resetCameraActive && styles.active].join(' ')} onClick={handleCameraReset}>
                        <div className={styles.keyContainer}>
                            <ComputerKeyIcon active={resetCameraActive} char='C' />
                        </div>
                        <span>Reset Camera</span>
                    </div>
                }
            </div>
            <div className={styles.knobs}>
                {thetas.map((theta, i) => (
                    <div
                        className={[styles.slider, followTarget ? styles.disabled : ''].join(' ')}
                        key={i}>
                        <RangeSlider
                            value={theta}
                            min={thetaRanges[i][0]}
                            max={thetaRanges[i][1]}
                            step="0.0001"
                            onChange={e => !followTarget && setThetaI(i, parseFloat(e.target.value))}
                            onMouseDown={() => setIsDraggingSlider(true)}
                            onMouseUp={() => setIsDraggingSlider(false)}
                            label={'Motor ' + (i + 1) + ':'}
                            displayValue={((theta) * 180 / Math.PI).toFixed(2) + '°'}
                            initValue={thetasReset[i]}
                            disabled={followTarget}
                            changing={activeMotors.includes(i)}
                        >
                            <div className={styles.keyContainer} style={{ display: 'flex', flexDirection: 'row', wrap: 'nowrap', width: 'auto', gap: '0.2rem', color: activeKey === i ? 'var(--color-accent-primary)' : null }}>
                                <ComputerKeyIcon char={i + 1} active={activeKey === i} />
                                +
                                <MouseIcon type='scroll' active={activeKey === i} />
                            </div>
                        </RangeSlider>
                    </div>
                ))}
            </div>
        </div>
    );
} 1

export default ControlsOverlay;