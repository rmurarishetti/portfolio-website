import { Suspense, useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Stage, useGLTF, Environment } from '@react-three/drei'
import styles from './AdaptiveViewer.module.scss';
import { useCorrectedTheme } from "../../../helpers/hooks";
import { MouseIcon, ComputerKeyIcon } from '../../icons';
import { useAOS } from '../../../helpers/hooks';

export default function Viewer({ href, fov = 27, aspectRatio = 2, shadows = true, contactShadow = true, autoRotate = true, rotateSpeed = 0.5, zoom0 = 10, minDistance = 1, maxDistance = 10, lightThemeColor = '#C5AFFF', darkThemeColor = '#7A00FC', lightThemeIntensity = 2, darkThemeIntensity = 0.5 }) {
  useAOS()
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resetCamera, setResetCamera] = useState(true);
  const [resetActive, setResetActive] = useState(false);
  const theme = useCorrectedTheme();
  const { scene } = useGLTF(href)
  const ref = useRef()
  var timer = null;

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'r' || event.key === 'R') {
        setResetCamera(true);
        setResetActive(true);
        setTimeout(() => {
          setResetCamera(false);
          setResetActive(false);
        }, 200); // 100ms delay to ensure the camera reset and active state toggle take effect
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = obj.receiveShadow = shadows
        obj.material.envMapIntensity = 0.8
      }
    })
  }, [scene, shadows])


  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);
  // Additional effect to reset `mounted` when `href` changes
  useEffect(() => {
    setMounted(false);

    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setMounted(true);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [href]);

  function environmentMap(theme) {
    return theme === 'light' ?
      '/3d/venice_sunset_1k.hdr' :
      '/3d/dikhololo_night_1k.hdr';
  }

  return (
    <>
      {!mounted &&
        <div className={styles.loader} style={{ aspectRatio: aspectRatio }}>
          3D model loading...
        </div>
      }
      {mounted &&
        <div
          data-aos='fade-up'
          className={styles.canvasWrapper}
          onPointerDown={(e) => { e.button === 0 ? setLeftClicked(true) : setRightClicked(true) }}
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
          <Canvas
            className={styles.scene}
            gl={{ preserveDrawingBuffer: true }}
            shadows dpr={[1, 1.5]}
            camera={{
              position: [0, 0, 0],
              fov: fov
            }}
            style={{ aspectRatio: aspectRatio }}>
            <ambientLight
              intensity={theme == 'light' ? 1 : 0.1} />
            <directionalLight
              position={[5, 0.2, -1]}
              color={'#FFFFFF'}
              intensity={0.1} />
            <pointLight
              castShadow
              receiveShadow
              position={[0, 50, 20]}
              color={theme == 'light' ? lightThemeColor : darkThemeColor}
              intensity={theme == 'light' ? lightThemeIntensity : darkThemeIntensity} />
            <Suspense fallback={null}>
              <Stage
                controls={ref}
                preset='rembrandt'
                environment={null}
                intensity={theme == 'light' ? 1 : 0}
                contactShadow={contactShadow}
                shadows="accumulative"
                adjustCamera={resetCamera}>
                <Environment background={false} files={environmentMap(theme)} />
                <primitive object={scene} />
              </Stage>
            </Suspense>
            <OrbitControls zoom0={zoom0} ref={ref} autoRotate={autoRotate} maxDistance={maxDistance} minDistance={minDistance} enablePan autoRotateSpeed={rotateSpeed} onWheel={() => { setScrolled(true) }} />
          </Canvas>
          <div className={[styles.controlsInfo].join(' ')}>
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
            <div className={[styles.controlsInfoItem, resetActive ? styles.active : ''].join(' ')}>
              <ComputerKeyIcon active={resetActive} />
              <span>Reset</span>
            </div>
          </div>
        </div>}
    </>
  )
}