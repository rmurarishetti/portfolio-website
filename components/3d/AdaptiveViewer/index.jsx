import { Suspense, useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Stage, useGLTF, Loader } from '@react-three/drei'
import styles from './AdaptiveViewer.module.scss';
import { useCorrectedTheme } from "../../../helpers/hooks";
import { MouseIcon, ComputerKeyIcon } from '../../icons';
import { useAOS } from '../../../helpers/hooks';
import { LoaderPlaceholder } from '../../3d';
import { ThemedLights, ThemedEnvironment } from '../themedProps';

export default function Viewer({ href, fov = 27, aspectRatio = 2, shadows = true, contactShadow = true, autoRotate = true, rotateSpeed = 0.5, zoom0 = 10, minDistance = 1, maxDistance = 10, lightProps }) {
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
      if (obj.isMesh || obj.group) {
        obj.castShadow = obj.receiveShadow = shadows
        obj.material.envMapIntensity = 0.8
      }
    })
  }, [scene, shadows])


  return (
    <>
      <div
        className={styles.canvasWrapper}
        data-aos='fade-up'
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
          concurrent
          className={styles.scene}
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
          camera={{
            position: [0, 0, 0],
            fov: fov
          }}
          style={{ aspectRatio: aspectRatio }}>
          <ThemedLights theme={theme} {...lightProps} />
          <Suspense fallback={<LoaderPlaceholder />}>
            <Stage
              controls={ref}
              preset='rembrandt'
              environment={null}
              intensity={theme == 'light' ? 0.2 : 0}
              contactShadow={contactShadow}
              shadows={shadows}
              adjustCamera={resetCamera}>
              {/* <Environment background={false} files={environmentMap(theme)} /> */}
              <ThemedEnvironment theme={theme} />
              <primitive object={scene} />
            </Stage>
          </Suspense>
          <OrbitControls zoom0={zoom0} ref={ref} autoRotate={autoRotate} maxDistance={maxDistance} minDistance={minDistance} enablePan autoRotateSpeed={rotateSpeed} onWheel={() => { setScrolled(true) }} />
        </Canvas>
        <Loader />
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
      </div>
    </>
  )
}