import * as THREE from 'three'
import React, { useEffect, useRef } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations, Effects, BakeShadows } from "@react-three/drei";
import ThemedSpotlight from './ThemedLight';
import { UnrealBloomPass } from 'three-stdlib'

function Winch(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/cad/winch.gltf");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        for (const action in actions) {
            void (actions[action].play().paused = true);
        }
    }, [actions])

    useFrame((state, delta) => {
        const offset = props.scroll
        for (const action in actions) {
            actions[action].time = THREE.MathUtils.damp(actions[action].time, (actions[action].getClip().duration) * offset, 100, delta);
        }
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="set_origin">
                {/* <spotLight angle={0.14} color="#cba2ff" penumbra={1} position={[0, 1, 0.1]} castshadow intensity={1} /> */}
                <ThemedSpotlight />
                {/* <fog attach="fog" args={['#202030', 10, 25]} /> */}
                {/* <hemisphereLight intensity={0.2} color="#8168ff" groundColor="#8168ff" /> */}
                {/* <directionalLight castShadow intensity={0.2} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} /> */}
                <group
                    name="Camera"
                    position={[0, 0.11, 0.57]}
                    rotation={[1.43, 0, 0]}
                    scale={0.2}
                >
                    <PerspectiveCamera
                        name="Camera_Orientation"
                        makeDefault={true}
                        far={1000}
                        near={0.1}
                        fov={22.9}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                </group>
                <group name="winchShell" position={[0, 0.08, 0]}>
                    <mesh
                        name="winchShell_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchShell_1.geometry}
                        material={materials["satin_finish_aluminum-8.001"]}
                    />
                    <mesh
                        name="winchShell_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchShell_2.geometry}
                        material={materials["satin_finish_stainless_steel.001"]}
                    />
                </group>
                <group name="winchBase">
                    <mesh
                        name="winchBase_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_1.geometry}
                        material={materials.satin_finish_stainless_steel}
                    />
                    <mesh
                        name="winchBase_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_2.geometry}
                        material={materials["matte_rubber-2"]}
                    />
                    <mesh
                        name="winchBase_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_3.geometry}
                        material={materials["satin_finish_aluminum-8"]}
                    />
                    <mesh
                        name="winchBase_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_4.geometry}
                        material={materials.satin_finish_aluminum}
                    />
                    <mesh
                        name="winchBase_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_5.geometry}
                        material={materials["default"]}
                    />
                    <mesh
                        name="winchBase_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_6.geometry}
                        material={materials["matte_steel-2"]}
                    />
                    <mesh
                        name="winchBase_7"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_7.geometry}
                        material={materials.Appearance}
                    />
                    <mesh
                        name="winchBase_8"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_8.geometry}
                        material={materials["color(Legacy)"]}
                    />
                    <mesh
                        name="winchBase_9"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_9.geometry}
                        material={materials.matte_rubber}
                    />
                </group>
            </group>
        </group>
    );
}

export default Winch;

useGLTF.preload("/cad/winch.gltf");
