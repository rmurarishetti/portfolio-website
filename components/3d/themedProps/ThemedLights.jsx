import { useSpring, animated as a, config } from '@react-spring/three';
import { useMemo } from 'react';

function ThemedLights({ theme, lightAmbientIntensity = 0, darkAmbientIntensity = 0.05, lightPointIntensity = 0, darkPointIntensity = 0.5, lightDirectionalIntensity = 0.2, darkDirectionalIntensity = 0.8, lightThemePosition = [0, 10, 0], darkThemePosition = [5, 5, 5], lightPointColor = '#C5AFFF', darkPointColor = '#7A00FC', showPointLight = true, showDirectionalLight = true, showAmbientLight = true, springConfig = config.molasses }) {

    const { ambientIntensity, pointColor, pointIntensity, directionalIntensity, lightPosition } = useSpring({
        ambientIntensity: theme === 'light' ? lightAmbientIntensity : darkAmbientIntensity,
        pointColor: theme === 'light' ? lightPointColor : darkPointColor,
        pointIntensity: theme === 'light' ? lightPointIntensity : darkPointIntensity,
        directionalIntensity: theme === 'light' ? lightDirectionalIntensity : darkDirectionalIntensity,
        lightPosition: theme === 'light' ? lightThemePosition : darkThemePosition,
        config: springConfig
    })

    return (
        <>
            {showAmbientLight && <a.ambientLight
                intensity={ambientIntensity}
            />}
            {showDirectionalLight && <a.directionalLight
                position={lightPosition}
                castShadow
                receiveShadow
                color="#FFFFFF"
                intensity={directionalIntensity}
                shadow-mapSize={[4096, 4096]}
            />}
            {showPointLight && <a.pointLight
                // castShadow
                receiveShadow
                position={lightPosition}
                color={pointColor}
                intensity={pointIntensity}
            />}
        </>
    )
}

export default ThemedLights;