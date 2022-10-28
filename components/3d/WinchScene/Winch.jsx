import * as THREE from 'three'
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations, Effects, BakeShadows } from "@react-three/drei";
import ThemedSpotlight from './ThemedLight';
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'


function Winch(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/cad/winch.gltf");
    const { actions } = useAnimations(animations, group);

    // Paused animations
    useEffect(() => {
        for (const action in actions) {
            void (actions[action].play().paused = true);
        }
    }, [actions])

    const [active, setActive] = useState(0)
    const [hovered, setHovered] = useState(0)
    const { spring: activeSpring } = useSpring({
        spring: active,
        config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
    })
    const { spring: hoverSpring } = useSpring({
        spring: hovered,
        config: { mass: 1, tension: 400, friction: 50, precision: 0.0001 }
    })

    const color = hoverSpring.to([0, 1], ['#fff', '#9e8bff'])
    const opacity = activeSpring.to([0, 1], [0.5, 1])
    let y = (0.203 * props.scroll * props.scroll) - (0.325 * props.scroll) + 0.13
    const shellPosition = [0, props.scroll < 0.8 ? Math.min(y, 0.13) : 0, 0];

    return (
        <a.group
            {...props}
            ref={group}
            dispose={null}>
            <group name="set_origin">
                <ThemedSpotlight />
                <group
                    name="Camera">
                    <PerspectiveCamera
                        name="Camera_Orientation"
                        makeDefault={true}
                        far={4}
                        near={1}
                        fov={17}
                        rotation={[-Math.PI / 2 + 0.1, 0, 0]}
                        position={[0, 0, 0.22]}
                    />
                </group>
                <a.group
                    name="winchShell"
                    position={shellPosition}
                    onClick={() => setActive(Number(!active))}
                    onPointerEnter={() => {
                        setHovered(1);
                        document.body.style.cursor = "pointer";
                    }}
                    onPointerLeave={() => {
                        setHovered(0);
                        document.body.style.cursor = "default";
                    }}>
                    <a.mesh
                        name="winchShell_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchShell_1.geometry}
                        material={materials["satin_finish_aluminum-8.001"]}>
                        <a.meshPhongMaterial color={color} opacity={opacity} transparent />
                    </a.mesh>
                    <mesh
                        name="winchShell_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchShell_2.geometry}
                        material={materials["satin_finish_stainless_steel.001"]}
                    />
                </a.group>
                <group name="winchBase">
                    <mesh
                        name="winchBase_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_1.geometry}
                        material={materials.satin_finish_stainless_steel}
                    ></mesh>
                    <mesh
                        name="winchBase_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_2.geometry}
                        material={materials["matte_rubber-2"]}
                    ></mesh>
                    <mesh
                        name="winchBase_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_3.geometry}
                        material={materials["satin_finish_aluminum-8"]}>
                    </mesh>
                    <mesh
                        name="winchBase_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.winchBase_4.geometry}
                        material={materials.satin_finish_aluminum}
                    ></mesh>
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
        </a.group>
    );
}

export default Winch;

useGLTF.preload("/cad/winch.gltf");
