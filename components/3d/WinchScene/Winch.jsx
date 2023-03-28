import { useRef, useState } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from '@react-spring/three';
import * as THREE from "three";

export function Winch(props) {
    const { nodes, materials } = useGLTF("/3d/winch.glb");
    const shaftRef = useRef();
    const shellRef = useRef();
    const [shaftActive, setShaftActive] = useState(1);
    const [shaftHovered, setShaftHovered] = useState(0);
    const [shellActive, setShellActive] = useState(0);
    const [shellHovered, setShellHovered] = useState(0);

    const { shellColor } = useSpring({ shellColor: shellHovered ? '#9e8bff' : '#555555' });
    const { shellOpacity } = useSpring({ shellOpacity: shellActive ? 1 : 0.5 });

    const { jawColor } = useSpring({ jawColor: shaftActive ? '#00EAFF' : '#FF0000' });
    const { jawEmissivity } = useSpring({ jawEmissivity: shaftHovered ? 0 : 1.5 });

    const initialShellY = 0.0365;
    const targetY = -0.1 * props.scroll + 0.0765;
    const clampedY = targetY < initialShellY ? targetY : initialShellY;

    useFrame(({ clock }) => {
        const mutiplier = shaftHovered || shaftActive;
        const full = !shaftHovered && shaftActive;
        shaftRef.current.rotation.x += 0.1 * (0.1 * mutiplier + full);

        if (shellRef.current) {
            const speed = 40;
            shellRef.current.position.y = THREE.MathUtils.lerp(shellRef.current.position.y, clampedY, speed * clock.getDelta());
        }
    });

    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Camera"
                    position={[-0.046, 0, 0.2]}>
                    <PerspectiveCamera
                        name="Camera_Orientation"
                        makeDefault={true}
                        position={[0, 0, 0.1]}
                        fov={25}
                    />
                </group>
                <group name="Base">
                    <group name="Base001" position={[-0.11275, -0.0525, 0.03628414]}>
                        <group
                            name="Base_Plate-1"
                            position={[-0.01505, 0.028, -0.01853414]}
                        >
                            <mesh
                                name="satin_finish_aluminum-8"
                                castShadow
                                receiveShadow
                                geometry={nodes["satin_finish_aluminum-8"].geometry}
                                material={materials["satin finish aluminum-8"]}
                            />
                        </group>
                        <group name="GearBox" position={[0.11275, 0.0525, -0.03628414]}>
                            <group
                                name="8x1mm_spacer-1"
                                position={[-0.1178, 0, 0]}
                                rotation={[-1.03956648, Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-41"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-41"].geometry}
                                    material={materials["satin finish aluminum.011"]}
                                />
                            </group>
                            <group
                                name="8x1mm_spacer-2"
                                position={[-0.0468, 0, 0]}
                                rotation={[-1.03956648, Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-4"].geometry}
                                    material={materials["satin finish aluminum.010"]}
                                />
                            </group>
                            <group
                                name="Bearing_Housings-1"
                                position={[-0.1168, 0, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-31"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-31"].geometry}
                                    material={materials["satin finish aluminum.013"]}
                                />
                            </group>
                            <group
                                name="Bearing_Housings-3"
                                position={[-0.0398, 0, 0]}
                                rotation={[0, -Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-3"].geometry}
                                    material={materials["satin finish aluminum.012"]}
                                />
                            </group>
                            <group
                                name="Gearbox_Housing-1"
                                position={[-0.0158, 0, 0]}
                                rotation={[0, Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-5"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-5"].geometry}
                                    material={materials["satin finish aluminum.009"]}
                                />
                            </group>
                            <group
                                name="Gearbox_output_shaft-1"
                                position={[-0.0208, 0, 0]}
                                rotation={[2.2882197, -Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="brushed_steel-3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["brushed_steel-3"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-1"
                                position={[-0.1188, -0.0075, 0.01175]}
                                rotation={[Math.PI, 0, Math.PI]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-77"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-77"].geometry}
                                    material={materials["satin finish aluminum.007"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-2"
                                position={[-0.1248, -0.0075, -0.01175]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-76"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-76"].geometry}
                                    material={materials["satin finish aluminum.006"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-3"
                                position={[-0.0478, -0.0075, -0.01175]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-75"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-75"].geometry}
                                    material={materials["satin finish aluminum.005"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-4"
                                position={[-0.0418, -0.0075, 0.01175]}
                                rotation={[Math.PI, 0, Math.PI]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-74"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-74"].geometry}
                                    material={materials["satin finish aluminum.004"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-5"
                                position={[-0.0158, -0.0075, -0.01175]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-73"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-73"].geometry}
                                    material={materials["satin finish aluminum.003"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-6"
                                position={[0.0142, -0.0075, -0.01175]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-72"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-72"].geometry}
                                    material={materials["satin finish aluminum.002"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-7"
                                position={[-0.0098, -0.0075, 0.01175]}
                                rotation={[Math.PI, 0, Math.PI]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-71"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-71"].geometry}
                                    material={materials["satin finish aluminum.001"]}
                                />
                            </group>
                            <group
                                name="Guide_Track-8"
                                position={[0.0202, -0.0075, 0.01175]}
                                rotation={[Math.PI, 0, Math.PI]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-7"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-7"].geometry}
                                    material={materials["satin finish aluminum"]}
                                />
                            </group>
                            <group
                                name="Maxon_Planetary_Gearbox_GPA_13_02Nm-1"
                                position={[-0.0199, 0, 0]}
                                rotation={[1.69436636, 0, 0]}
                            >
                                <mesh
                                    name="machined_steel-2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["machined_steel-2"].geometry}
                                    material={materials["Default Material"]}
                                />
                                <mesh
                                    name="matte_steel"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.matte_steel.geometry}
                                    material={materials["matte steel-2"]}
                                />
                                <mesh
                                    name="brushed_steel-2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["brushed_steel-2"].geometry}
                                    material={materials["satin finish stainless steel.004"]}
                                />
                                <mesh
                                    name="machined_steel"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.machined_steel.geometry}
                                    material={materials["satin finish aluminum-8.001"]}
                                />
                                <mesh
                                    name="matte_steel_(Cosmetic_Thread)"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["matte_steel_(Cosmetic_Thread)"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="Motor_Housing-1"
                                position={[0.0142, 0, 0]}
                                rotation={[0, Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="satin_finish_aluminum-6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["satin_finish_aluminum-6"].geometry}
                                    material={materials["satin finish aluminum.008"]}
                                />
                            </group>
                            <group
                                name="Motor_Wire_1-1"
                                position={[0.01278663, -0.01449576, 0.01308155]}
                                rotation={[-0.44565685, 0.72277258, 1.08005818]}
                            >
                                <mesh
                                    name="matte_rubber-3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["matte_rubber-3"].geometry}
                                    material={materials["matte rubber"]}
                                />
                                <mesh
                                    name="color(Legacy)1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color(Legacy)1"].geometry}
                                    material={materials["color(Legacy).001"]}
                                />
                            </group>
                            <group
                                name="Motor_Wire_2-1"
                                position={[0.01752641, -0.01470029, 0.01328608]}
                                rotation={[-0.61789037, 0.77110019, 1.33276954]}
                            />
                            <group
                                name="W_61800_2Z_25-1"
                                position={[-0.1228, 0, 0]}
                                rotation={[-1.25465676, 0, 0]}
                            >
                                <mesh
                                    name="color-31"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-31"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_61800_2Z_25-1_2"
                                position={[-0.0458, 0, 0]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-3"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_61800_2Z_27-1"
                                position={[-0.1228, 0, 0]}
                                rotation={[-1.25465676, 0, 0]}
                            >
                                <mesh
                                    name="color-41"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-41"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_61800_2Z_27-1_2"
                                position={[-0.0458, 0, 0]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-4"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_27-1"
                                position={[-0.1203, -0.015, -0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-63"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-63"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_27-1_2"
                                position={[-0.1203, -0.015, 0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-62"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-62"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_27-1_3"
                                position={[-0.0433, -0.015, 0.00525]}
                                rotation={[-1.20453224, 0, 0]}
                            >
                                <mesh
                                    name="color-61"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-61"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_27-1_4"
                                position={[-0.0433, -0.015, -0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-6"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_29-1"
                                position={[-0.1203, -0.015, -0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-73"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-73"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_29-1_2"
                                position={[-0.1203, -0.015, 0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-72"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-72"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_29-1_3"
                                position={[-0.0433, -0.015, 0.00525]}
                                rotation={[-1.20453224, 0, 0]}
                            >
                                <mesh
                                    name="color-71"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-71"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="W_627_4_2Z_29-1_4"
                                position={[-0.0433, -0.015, -0.00525]}
                                rotation={[-1.03956646, 0, 0]}
                            >
                                <mesh
                                    name="color-7"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["color-7"].geometry}
                                    material={materials["Default Material"]}
                                />
                            </group>
                            <group
                                name="Winch_Roller-1"
                                position={[-0.0818, -0.015, -0.00525]}
                                rotation={[-1.03956648, Math.PI / 2, 0]}
                            >
                                <mesh
                                    name="polished_aluminum1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polished_aluminum1.geometry}
                                    material={materials["satin finish aluminum.015"]}
                                />
                            </group>
                            <group
                                name="Winch_Roller-2"
                                position={[-0.0818, -0.015, 0.00525]}
                                rotation={[2.93652031, 1.57070894, 0]}
                            >
                                <mesh
                                    name="polished_aluminum"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.polished_aluminum.geometry}
                                    material={materials["satin finish aluminum.014"]}
                                />
                            </group>
                            <mesh
                                name="brushed_steel"
                                castShadow
                                receiveShadow
                                geometry={nodes.brushed_steel.geometry}
                                material={materials["satin finish stainless steel.005"]}
                            />
                            <mesh
                                name="color(Legacy)"
                                castShadow
                                receiveShadow
                                geometry={nodes["color(Legacy)"].geometry}
                                material={materials["color(Legacy)"]}
                                position={[0.01752641, -0.01470029, 0.01328608]}
                                rotation={[-0.61789037, 0.77110019, 1.33276954]}
                            />
                            <mesh
                                name="matte_rubber"
                                castShadow
                                receiveShadow
                                geometry={nodes.matte_rubber.geometry}
                                material={materials["matte rubber.001"]}
                            />
                            <mesh
                                name="matte_rubber-2"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_rubber-2"].geometry}
                                material={materials["matte rubber-2.003"]}
                            />
                            <mesh
                                name="matte_aluminum"
                                castShadow
                                receiveShadow
                                geometry={nodes.matte_aluminum.geometry}
                                material={materials["matte steel-2.001"]}
                            />
                            <mesh
                                name="matte_rubber-4"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_rubber-4"].geometry}
                                material={materials["matte rubber-2.002"]}
                                position={[0.01752641, -0.01470029, 0.01328608]}
                                rotation={[-0.61789037, 0.77110019, 1.33276954]}
                            />
                            <mesh
                                name="dark_grey_low_gloss_plastic"
                                castShadow
                                receiveShadow
                                geometry={nodes.dark_grey_low_gloss_plastic.geometry}
                                material={materials["satin finish aluminum-8.002"]}
                            />
                        </group>
                        <group
                            name="hexalobular_socket_pan_head_iso-5"
                            position={[0.12989999, 0, -0.07256828]}
                        >
                            <mesh
                                name="satin_finish_stainless_steel3"
                                castShadow
                                receiveShadow
                                geometry={nodes.satin_finish_stainless_steel3.geometry}
                                material={materials["satin finish stainless steel.003"]}
                            />
                        </group>
                        <group
                            name="hexalobular_socket_pan_head_iso-6"
                            position={[0, 0, -0.07256828]}
                        >
                            <mesh
                                name="satin_finish_stainless_steel2"
                                castShadow
                                receiveShadow
                                geometry={nodes.satin_finish_stainless_steel2.geometry}
                                material={materials["satin finish stainless steel.002"]}
                            />
                        </group>
                        <group
                            name="hexalobular_socket_pan_head_iso-7"
                            position={[0.12989999, 0, 0]}
                        >
                            <mesh
                                name="satin_finish_stainless_steel1"
                                castShadow
                                receiveShadow
                                geometry={nodes.satin_finish_stainless_steel1.geometry}
                                material={materials["satin finish stainless steel.001"]}
                            />
                        </group>
                        <group
                            name="Vibration_Isolater-1"
                            position={[0.14495, -0.001, 0.00721586]}
                            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        >
                            <mesh
                                name="matte_rubber-51"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_rubber-51"].geometry}
                                material={materials["matte rubber-2.001"]}
                            />
                        </group>
                        <group
                            name="Vibration_Isolater-2"
                            position={[-0.01505, -0.001, -0.07978414]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                        >
                            <mesh
                                name="matte_rubber-5"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_rubber-5"].geometry}
                                material={materials["matte rubber-2"]}
                            />
                        </group>
                        <mesh
                            name="satin_finish_stainless_steel"
                            castShadow
                            receiveShadow
                            geometry={nodes.satin_finish_stainless_steel.geometry}
                            material={materials["satin finish stainless steel"]}
                        />
                    </group>
                </group>
                <group name="Shaft" ref={shaftRef}>
                    <group
                        name="Shaft001"
                        position={[-0.022, 0, 0]}
                        rotation={[3.02543242, 0, Math.PI / 2]}
                        onClick={() => setShaftActive(Number(!shaftActive))}
                        onPointerEnter={() => {
                            setShaftHovered(1);
                            document.body.style.cursor = "pointer";
                        }}
                        onPointerLeave={() => {
                            setShaftHovered(0);
                            document.body.style.cursor = "default";
                        }}
                    >
                        <group
                            name="Flexible_Jaw_Coupling_5-8_Hub_8-2"
                            position={[0, 0.015, 0]}
                            rotation={[Math.PI, -Math.PI / 2, 0]}
                        >
                            <mesh
                                name="satin_finish_aluminum-2"
                                castShadow
                                receiveShadow
                                geometry={nodes["satin_finish_aluminum-2"].geometry}
                                material={materials["satin finish aluminum.017"]}
                            />
                        </group>
                        <group
                            name="Flexible_Jaw_Coupling_5-8_Rubber-1"
                            position={[0, -0.0075, 0]}
                        >
                            <animated.mesh
                                name="glossy_rubber"
                                castShadow
                                receiveShadow
                                geometry={nodes.glossy_rubber.geometry}
                                material={materials.Appearance}>
                                <animated.meshPhongMaterial color={jawColor} emissive={jawColor} emissiveIntensity={jawEmissivity} />
                            </animated.mesh>
                        </group>
                        <group
                            name="Winch_Spool-1"
                            position={[0, 0.0648, 0]}
                            rotation={[-Math.PI, -0.46916003, Math.PI / 2]}
                        >
                            <mesh
                                name="matte_steel-2"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_steel-2"].geometry}
                                material={materials["matte steel-2.002"]}
                            />
                        </group>
                        <mesh
                            name="satin_finish_aluminum"
                            castShadow
                            receiveShadow
                            geometry={nodes.satin_finish_aluminum.geometry}
                            material={materials["satin finish aluminum.016"]}
                        />
                    </group>
                </group>
                <group name="Shell" >
                    <animated.group
                        ref={shellRef}
                        onClick={() => setShellActive(Number(!shellActive))}
                        onPointerEnter={() => {
                            setShellHovered(1);
                            document.body.style.cursor = "pointer";
                        }}
                        onPointerLeave={() => {
                            setShellHovered(0);
                            document.body.style.cursor = "default";
                        }}
                        name="Shell001"
                        position={[-0.1278, initialShellY, 0.01775]}>
                        <group
                            name="Guide_Rail-1"
                            position={[0.148, 0.00246151, -0.006]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        >
                            <mesh
                                name="color-84"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-84"].geometry}
                                material={materials["satin finish stainless steel.010"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-2"
                            position={[0.118, 0.00246151, -0.006]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        >
                            <mesh
                                name="color-85"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-85"].geometry}
                                material={materials["satin finish stainless steel.011"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-3"
                            position={[0.086, 0.00246151, -0.006]}
                            rotation={[Math.PI, 0, Math.PI]}
                        >
                            <mesh
                                name="color-86"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-86"].geometry}
                                material={materials["satin finish stainless steel.012"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-4"
                            position={[0.009, 0.00246151, -0.006]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        >
                            <mesh
                                name="color-87"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-87"].geometry}
                                material={materials["satin finish stainless steel.013"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-5"
                            position={[0.142, 0.00246151, -0.0295]}>
                            <mesh
                                name="color-8"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-8"].geometry}
                                material={materials["satin finish stainless steel.006"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-6"
                            position={[0.112, 0.00246151, -0.0295]}>
                            <mesh
                                name="color-81"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-81"].geometry}
                                material={materials["satin finish stainless steel.007"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-7"
                            position={[0.08, 0.00246151, -0.0295]}>
                            <mesh
                                name="color-82"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-82"].geometry}
                                material={materials["satin finish stainless steel.008"]}
                            />
                        </group>
                        <group
                            name="Guide_Rail-8"
                            position={[0.00300001, 0.00246151, -0.0295]}
                        >
                            <mesh
                                name="color-83"
                                castShadow
                                receiveShadow
                                geometry={nodes["color-83"].geometry}
                                material={materials["satin finish stainless steel.009"]}
                            />
                        </group>
                        <animated.mesh
                            name="satin_finish_aluminum-9"
                            castShadow
                            receiveShadow
                            geometry={nodes["satin_finish_aluminum-9"].geometry}
                            material={materials["satin finish aluminum-8.003"]}>
                            <animated.meshPhongMaterial color={shellColor} opacity={shellOpacity} transparent />
                        </animated.mesh>
                    </animated.group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/3d/winch.glb");
