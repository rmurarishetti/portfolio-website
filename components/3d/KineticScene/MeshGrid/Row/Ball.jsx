export const Ball = ({ position = [0, 0, 0], radius = 0.2, color = 'blue', scale = 1 }) => {
    return (
        <mesh position={position} scale={scale}>
            <sphereGeometry args={[radius, 24, 24]} attach="geometry" />
            <meshStandardMaterial color={color} attach="material" />
        </mesh>
    );
};