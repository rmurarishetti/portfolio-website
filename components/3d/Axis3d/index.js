import { Text } from '@react-three/drei';

export function Axis3d({ position = [0, 0, 0], length = 0.05, name = "0" }) {
    const [x, y, z] = position;
    const labelPosOffset = length * 1.2;
    const labelPositionX = [x + labelPosOffset, y, z];
    const labelPositionY = [x, y + labelPosOffset, z];
    const labelPositionZ = [x, y, z + labelPosOffset];

    return (
        <group>
            <axesHelper args={[length]} position={position} depthTest={false} />
            <Text
                position={labelPositionX}
                color="red" fontSize={0.01}
            >
                x_{name}
            </Text>
            <Text
                position={labelPositionY}
                color="green"
                fontSize={0.01}
            >
                y_{name}
            </Text>
            <Text
                position={labelPositionZ}
                color="blue"
                fontSize={0.01}
            >
                z_{name}
            </Text>
        </group>
    );
}