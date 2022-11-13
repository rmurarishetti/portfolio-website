import { Color, AdditiveBlending, BackSide } from 'three'
import { ThreeElements } from '@react-three/fiber';
import { colors } from '../../../../../helpers/format';

import './shaderMaterials'

export function GlowSphere({ theme, position, radius }) {
    const themedGlowProps = {
        'dark': {
            glowColor: new Color(colors['dark'].globeGlow),
            c: 0.4,
            p: 4
        },
        'light': {
            glowColor: new Color(colors['light'].globeGlow),
            c: 0.3,
            p: 2
        }
    }

    return (
        <mesh position={position}>
            <sphereGeometry args={[radius, 64, 64]} />
            <glowShaderMaterial
                attach="material"
                blending={AdditiveBlending}
                transparent={true}
                side={BackSide}
                {...themedGlowProps[theme]} />
        </mesh>
    )
}