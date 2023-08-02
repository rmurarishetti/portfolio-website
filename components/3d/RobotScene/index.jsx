import { Suspense, useMemo, memo, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';
import { useCorrectedTheme } from '../../../helpers/hooks';
import { Manipulator } from './Manipulator';
import { Target } from './Target';
import styles from './RobotScene.module.scss';
import ControlsOverlay from './ControlsOverlay';
import { getE6TMat4Inv } from '../../../helpers/math';
import * as THREE from 'three';
import { ThemedLights, ThemedEnvironment } from '../themedProps';
import LoaderPlaceholder from '../LoaderPlaceholder';


const MemoizedManipulator = memo(Manipulator);
const MemoizedTarget = memo(Target);

// Constants outside of functions to prevent re-creation
const D1 = 0.135;
const A3 = 0.400;
const D4 = 0.444;
const AE = 0.17271;
const tMat4_6E = (new THREE.Matrix4).set(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, AE,
    0, 0, 0, 1
);
const tMat4_E6 = getE6TMat4Inv(tMat4_6E); // Pre-compute the inverse

const thetaRanges = [
    [-Math.PI, Math.PI],
    [-Math.PI, Math.PI],
    [-Math.PI, Math.PI],
    [-Math.PI, Math.PI],
    [-Math.PI, Math.PI],
    [-Math.PI, Math.PI],
]
const thetasInit = [0, 0.75 * Math.PI, -0.5 * Math.PI, 0, 0, 0];
const baseRotation = [-Math.PI / 2, 0, 0]
const basePosition = [0, 0, 0]
const targetMatrixInit = new THREE.Matrix4()
targetMatrixInit.set(
    1, 0, 0, 0.2,
    0, 1, 0, 0.2,
    0, 0, 1, 0.4,
    0, 0, 0, 1
)

function RobotScene({ autoRotate = false, rotateSpeed = 0.5, zoom0 = 1, minDistance = 1, maxDistance = 10 }) {
    const theme = useCorrectedTheme();
    const jointSpringConfig = useMemo(() => ({
        mass: 1,
        tension: 120,  // Adjust this
        friction: 40,  // Adjust this
        precision: 0.001
    }), []);
    const [thetas, setThetas] = useState(thetasInit);
    const [isDraggingSlider, setIsDraggingSlider] = useState(false);
    const targetRef = useRef();
    const [followTarget, setFollowTarget] = useState(false);
    const [isDraggingTarget, setIsDraggingTarget] = useState(false);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showWorkspace, setShowWorkspace] = useState(false);
    const [mobileLayout, setMobileLayout] = useState(false);
    var timer = null;
    const orbitControlsRef = useRef();
    const containerRef = useRef();

    // const [resetCamera, setResetCamera] = useState(true);
    const [resetCameraActive, setResetCameraActive] = useState(false);
    const [resetMotorsActive, setResetMotorsActive] = useState(false);
    const [resetTargetActive, setResetTargetActive] = useState(false);
    const [activeKey, setActiveKey] = useState(null);
    const [activeMotors, setActiveMotors] = useState([false, false, false, false, false, false]);
    const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);
    const [viewVerticalPosition, setViewVerticalPosition] = useState(-0.25);
    const [fov, setFov] = useState(20);

    //check if the window is resized and update the viewVerticalPosition and the fov:
    useEffect(() => {
        // This function can be customized to calculate the desired value of viewVerticalPosition based on the window's dimensions.
        const calculateViewVerticalPositionFov = () => {
            // Scale from -0.25 (window width > 800) to 0.25 (window width < 500):
            const minWidth = 400;
            const maxWidth = 800;
            const minWidthPos = 0.25;
            const maxWidthPos = -0.25;
            const minFov = 30;
            const maxFov = 20;
            const clampedWidth = Math.max(minWidth, Math.min(maxWidth, window.innerWidth));
            const pos = minWidthPos + (clampedWidth - minWidth) * (maxWidthPos - minWidthPos) / (maxWidth - minWidth)
            const fov = minFov + (clampedWidth - minWidth) * (maxFov - minFov) / (maxWidth - minWidth)
            return [pos, fov];
        };
        // Function to handle resize events
        const handleResize = () => {
            const [pos, fov] = calculateViewVerticalPositionFov();
            window.innerWidth < 600 ? setMobileLayout(true) : setMobileLayout(false);
            setViewVerticalPosition(pos);
            setFov(fov);
        };
        // Call the functions initially to set the right values based on the initial window size.
        handleResize();
        // Attach the event listener
        window.addEventListener('resize', handleResize);
        // Cleanup
        return () => {
            // Remove the event listener when the component unmounts.
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCameraReset = () => {
        if (orbitControlsRef.current) {
            orbitControlsRef.current.reset(); // This resets the camera using OrbitControls' reset function
        }
        setResetCameraActive(true);
        setTimeout(() => {
            setResetCameraActive(false);
        }, 200); // 100ms delay to ensure the camera reset and active state toggle take effect
    }


    useEffect(() => {
        function handleKeyDown(event) {
            if (event.keyCode >= 49 && event.keyCode <= 54) { // Keys 1-6
                setActiveKey(event.keyCode - 49);  // convert keycode to index
                setOrbitControlsEnabled(false); // Disable OrbitControls when a key is pressed
            }
        }

        function handleKeyUp(event) {
            if (event.keyCode >= 49 && event.keyCode <= 54) {
                setActiveKey(null);
                setOrbitControlsEnabled(true); // Re-enable OrbitControls once the key is up
            }
        }

        function handleScroll(event) {
            if (followTarget) { return }
            if (activeKey !== null) {
                event.preventDefault();
                event.stopPropagation(); // Stop the event from being propagated
                let newThetaValue = thetas[activeKey] + (event.deltaY < 0 ? 0.05 : -0.05);

                // Clamp the newThetaValue to be within its range
                newThetaValue = Math.max(thetaRanges[activeKey][0], Math.min(newThetaValue, thetaRanges[activeKey][1]));

                let newThetas = [...thetas];
                newThetas[activeKey] = newThetaValue;
                setThetas(newThetas);
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'c' || event.key === 'C') {
                handleCameraReset();
            }
            else if (event.key === 'w' || event.key === 'W') {
                setShowWorkspace(prev => !prev);
            }
            else if (event.key === 't' || event.key === 'T') {
                setFollowTarget(prev => !prev);
            }
            else if (event.key === 'm' || event.key === 'M') {
                setThetas(thetasInit);
                setFollowTarget(false);
                setResetMotorsActive(true);
                setTimeout(() => {
                    setResetMotorsActive(false);
                }, 200); // 100ms delay to ensure the motor reset and active state toggle take effect
            }
            else if (event.key === 'r' || event.key === 'R') {
                if (targetRef.current) {
                    targetRef.current.matrix.copy(targetMatrixInit);
                }
                setResetTargetActive(true);
                setTimeout(() => {
                    setResetTargetActive(false);
                }, 200); // 100ms delay to ensure the camera reset and active state toggle take effect
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        window.addEventListener('keydown', handleKeyPress);
        const container = containerRef.current !== null ? containerRef.current : null;
        container.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('keydown', handleKeyPress);
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, [activeKey, thetas, scrolled, followTarget]); // add 'scrolled' to dependency array

    return (
        <div
            className={styles.robotScene}
            ref={containerRef}
        >
            <ControlsOverlay
                setThetas={setThetas}
                thetas={thetas}
                thetasReset={thetasInit}
                thetaRanges={thetaRanges}
                isDraggingSlider={isDraggingSlider}
                setIsDraggingSlider={setIsDraggingSlider}
                followTarget={followTarget}
                setFollowTarget={setFollowTarget}
                leftClicked={leftClicked}
                rightClicked={rightClicked}
                scrolled={scrolled}
                resetCameraActive={resetCameraActive}
                setShowWorkspace={setShowWorkspace}
                showWorkspace={showWorkspace}
                activeKey={activeKey}
                activeMotors={activeMotors}
                targetRef={targetRef}
                targetMatrixInit={targetMatrixInit}
                resetMotorsActive={resetMotorsActive}
                resetTargetActive={resetTargetActive}
                mobileLayout={mobileLayout}
                handleCameraReset={handleCameraReset}
            />
            <Canvas
                className={styles.scene}
                frameloop="demand"
                gl={{ preserveDrawingBuffer: true }}
                raycaster={{ params: { Line: { threshold: 0.15 } } }}
                shadows
                dpr={[4, 1.5]}
                camera={{ position: [0, 0, 0], fov: 30 }}
                onPointerDown={(e) => { e.button === 0 ? setLeftClicked(!isDraggingTarget) : setRightClicked(!isDraggingTarget) }}
                onPointerUp={(e) => { e.button === 0 ? setLeftClicked(false) : setRightClicked(false) }}
                onWheel={(e) => {
                    if (timer !== null) {
                        clearTimeout(timer);
                        setScrolled(true)
                    }
                    timer = setTimeout(function () {
                        setScrolled(false)
                    }, 500);
                }}
            >
                <PerspectiveCamera
                    name="Default_Camera"
                    makeDefault={true}
                    fov={fov}
                    position={[3, 1, 3]}
                />
                <ThemedLights theme={theme} />
                <Suspense fallback={<LoaderPlaceholder />}>
                    <ThemedEnvironment theme={theme} />
                    {/* <axesHelper args={[1]} />  */}
                    <group position={[0, viewVerticalPosition, 0]}>
                        <mesh scale={20} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry />
                            <shadowMaterial transparent opacity={0.5} />
                        </mesh>
                        <mesh position={[0, D1, 0]} castShadow visible={showWorkspace}>
                            <sphereGeometry args={[(A3 + D4 + AE) * 0.8, 32 * 3, 32 * 3]} />
                            <meshPhysicalMaterial color={'#8341FF'} transparent opacity={0.1} depthTest={false} clearcoat={1} />
                        </mesh>
                        <MemoizedManipulator
                            D1={D1}
                            A3={A3}
                            D4={D4}
                            tMat4_E6={tMat4_E6}
                            basePosition={basePosition}
                            baseRotation={baseRotation}
                            thetas={thetas}
                            setThetas={setThetas}
                            thetaRanges={thetaRanges}
                            targetRef={followTarget ? targetRef : null}
                            isDraggingTarget={isDraggingTarget}
                            setActiveMotors={setActiveMotors}
                            followTarget={followTarget}
                            jointSpringConfig={jointSpringConfig}
                        />
                        <MemoizedTarget
                            D1={D1}
                            A3={A3}
                            D4={D4}
                            AE={AE}
                            reference={targetRef}
                            basePosition={basePosition}
                            baseRotation={baseRotation}
                            followTarget={followTarget}
                            setIsDraggingTarget={setIsDraggingTarget}
                            matrix={targetMatrixInit}
                        />
                        <OrbitControls
                            ref={orbitControlsRef}
                            zoom0={zoom0}
                            autoRotate={autoRotate}
                            maxDistance={maxDistance}
                            minDistance={minDistance}
                            enablePan
                            autoRotateSpeed={rotateSpeed}
                            enableZoom={orbitControlsEnabled}
                            onWheel={() => { orbitControlsEnabled && setScrolled(true) }}
                            makeDefault
                        />
                    </group>
                </Suspense>
            </Canvas>
            <Loader />
        </div>
    );
}

export default memo(RobotScene);