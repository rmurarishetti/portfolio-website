import { Canvas } from '@react-three/fiber';
import { useScrollPercentage } from '../../../helpers/hooks';


function WinchScene() {
    const [scrolRef] = useScrollPercentage();

    return (
        <Canvas
            width="10px" height="10px">
        </Canvas>
    );
}

export default WinchScene;