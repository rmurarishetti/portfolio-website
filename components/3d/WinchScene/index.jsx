import { memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScrollPercentage } from '../../../helpers/hooks';


function WinchScene() {
    const [scrolRef] = useScrollPercentage();

    return (
        <Canvas
            ref={scrolRef}>
        </Canvas>
    );
}

export default memo(WinchScene);