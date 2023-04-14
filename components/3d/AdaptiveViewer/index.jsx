import { Suspense, useLayoutEffect, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Stage, useGLTF } from '@react-three/drei'
import styles from './AdaptiveViewer.module.scss';
import { useCorrectedTheme } from "../../../helpers/hooks";
import { MouseIcon } from '../../icons';

export default function Viewer({ href, fov = 27, aspectRatio = 2, shadows = true, contactShadow = true, autoRotate = true }) {
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useCorrectedTheme();
  const { scene } = useGLTF(href)
  const ref = useRef()
  var timer = null;


  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if (!obj.parent) {
        console.log(obj)
      }
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

  return (
    <>
      {!mounted &&
        <div className={styles.loader} style={{ aspectRatio: aspectRatio }}>
          3D model loading...
        </div>
      }
      {mounted &&
        <div
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
              color={theme == 'light' ? "#C5AFFF" : "#7A00FC"}
              intensity={theme == 'light' ? 2 : 0.5} />
            <Suspense fallback={null}>
              <Stage
                controls={ref}
                preset='rembrandt'
                intensity={theme == 'light' ? 1 : 0}
                contactShadow={contactShadow}
                shadows="accumulative"
                adjustCamera
                environment={theme == 'light' ? 'sunset' : 'night'}>
                <primitive object={scene} />
              </Stage>
            </Suspense>
            <OrbitControls ref={ref} autoRotate={autoRotate} maxDistance={10} minDistance={1} enablePan autoRotateSpeed={0.5} onWheel={() => { setScrolled(true) }} />
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
          </div>
        </div>}
    </>
  )
}