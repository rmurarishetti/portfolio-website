import { useGLTF } from "@react-three/drei";
import { inverseKin } from "../../../helpers/math";
import { useMemo, useState, useEffect } from "react";
import { useSpring, animated as a, config } from '@react-spring/three';
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";

const MAT4 = new THREE.Matrix4();
const AlternateTargetRotations = [
    { axis: 'X', mat: MAT4.makeRotationX(Math.PI) },
    { axis: 'Y', mat: MAT4.makeRotationY(Math.PI) }
];

export function Manipulator({ D1, A3, D4, tMat4_E6, basePosition, baseRotation, thetas, setThetas, thetaRanges, targetRef = null, isDraggingTarget = false, setActiveMotors, followTarget = false, jointSpringConfig = config.gentle }) {
    const [gripOpen, setGripOpen] = useState(false)
    useEffect(() => {
        if (!targetRef || !targetRef.current) {
            setGripOpen(true);
            return;
        };
        if (isDraggingTarget) {
            setGripOpen(true);
        }
        const targetTMat4 = targetRef.current.matrix;
        const targetThetas = inverseKin(targetTMat4, tMat4_E6, D1, A3, D4, thetas, thetaRanges);
        if (!targetThetas.some(isNaN)) {
            setThetas(targetThetas);
            return;
        }
        for (const rotation of AlternateTargetRotations) {
            const rotatedTargetTMat4 = targetTMat4.clone().multiply(rotation.mat);
            const rotatedTargetThetas = inverseKin(rotatedTargetTMat4, tMat4_E6, D1, A3, D4, thetas, thetaRanges);
            if (!rotatedTargetThetas.some(isNaN)) {
                setThetas(rotatedTargetThetas);
                return;
            }
        }
    }, [targetRef, isDraggingTarget, thetas, setThetas, thetaRanges, tMat4_E6, D1, A3, D4, gripOpen]);

    const { rotation1, rotation2, rotation3, rotation4, rotation5, rotation6 } = useSpring({
        rotation1: [0, 0, Math.PI / 2 + thetas[0]],
        rotation2: [-Math.PI / 2, Math.PI / 2, -thetas[1]],
        rotation3: [Math.PI, 0, thetas[2]],
        rotation4: [0, Math.PI / 2, thetas[3]],
        rotation5: [0, Math.PI / 2, -Math.PI + thetas[4]],
        rotation6: [-Math.PI / 2, 0, thetas[5]],
        config: jointSpringConfig
    });

    const { gripPos1, gripPos2 } = useSpring({
        gripPos1: gripOpen ? [-0.025, 0, 0.08] : [0, 0, 0.08],
        gripPos2: gripOpen ? [0.025, 0, 0.08] : [0, 0, 0.08],
        config: config.stiff,
    });

    useFrame(() => {
        const animatedThetas = [
            rotation1.get()[2] - Math.PI / 2,
            -rotation2.get()[2],
            rotation3.get()[2],
            rotation4.get()[2],
            rotation5.get()[2] + Math.PI,
            rotation6.get()[2]
        ]
        setActiveMotors(thetas.map(function (theta, i) {
            return Math.abs(theta - animatedThetas[i]) >= 0.01 ? i : -1;
        }));
        if (!followTarget) { return }
        const reached_target = thetas.every(function (theta, i) {
            return Math.abs(theta - animatedThetas[i]) <= 0.01;
        });
        if (reached_target) {
            setGripOpen(false);
        }
    });




    const { nodes, materials } = useGLTF("/3d/manipulator.draco.glb");


    return (
        <a.group
            name="Manipulator"
            dispose={null}
            position={[0, 0, 0]}
        >
            <a.group
                name="baseplate"
                position={basePosition}
                rotation={baseRotation}
            >
                {/* <Axis3d name={"0"} />
                {absTMat4s.map((tMat4, idx) => (
                    <Joint key={idx} linkNumber={idx + 1} absMat4={tMat4} isEndEffector={idx == absTMat4s.length - 1} />
                ))} */}
                <mesh
                    name="black_medium_gloss_plastic"
                    castShadow
                    receiveShadow
                    geometry={nodes.black_medium_gloss_plastic.geometry}
                    material={materials["black medium gloss plastic"]}
                />
                <mesh
                    name="black_medium_gloss_plastic-2"
                    castShadow
                    receiveShadow
                    geometry={nodes["black_medium_gloss_plastic-2"].geometry}
                    material={materials["black medium gloss plastic-2"]}
                />
                <a.group name="link1-1"
                    position={[0, 0, 0.05]}
                    rotation={rotation1}>
                    <mesh
                        name="matte_aluminum"
                        castShadow
                        receiveShadow
                        geometry={nodes.matte_aluminum.geometry}
                        material={materials["matte aluminum"]}
                    />
                    <mesh
                        name="matte_aluminum-2"
                        castShadow
                        receiveShadow
                        geometry={nodes["matte_aluminum-2"].geometry}
                        material={materials["matte aluminum-2"]}
                    />
                    <mesh
                        name="black_medium_gloss_plastic-3"
                        castShadow
                        receiveShadow
                        geometry={nodes["black_medium_gloss_plastic-3"].geometry}
                        material={materials["black medium gloss plastic-2"]}
                    />
                    <mesh
                        name="matte_rubber"
                        castShadow
                        receiveShadow
                        geometry={nodes.matte_rubber.geometry}
                        material={materials["matte rubber"]}
                    />
                    <a.group
                        name="link2-1"
                        position={[0, 0, 0.085]}
                        rotation={rotation2}
                    >
                        <mesh
                            name="white_low_gloss_plastic"
                            castShadow
                            receiveShadow
                            geometry={nodes.white_low_gloss_plastic.geometry}
                            material={materials["white low gloss plastic"]}
                        />
                        <mesh
                            name="matte_aluminum-3"
                            castShadow
                            receiveShadow
                            geometry={nodes["matte_aluminum-3"].geometry}
                            material={materials["matte aluminum"]}
                        />
                        <a.group
                            name="link3-1"
                            position={[A3, 0, 0]}
                            rotation={rotation3}
                        >
                            <mesh
                                name="matte_aluminum-4"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_aluminum-4"].geometry}
                                material={materials["matte aluminum"]}
                            />
                            <mesh
                                name="matte_aluminum-5"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_aluminum-5"].geometry}
                                material={materials["matte aluminum-2"]}
                            />
                            <mesh
                                name="black_medium_gloss_plastic-4"
                                castShadow
                                receiveShadow
                                geometry={nodes["black_medium_gloss_plastic-4"].geometry}
                                material={materials["black medium gloss plastic-2"]}
                            />
                            <mesh
                                name="white_low_gloss_plastic-2"
                                castShadow
                                receiveShadow
                                geometry={nodes["white_low_gloss_plastic-2"].geometry}
                                material={materials["white low gloss plastic"]}
                            />
                            <mesh
                                name="matte_rubber-2"
                                castShadow
                                receiveShadow
                                geometry={nodes["matte_rubber-2"].geometry}
                                material={materials["matte rubber"]}
                            />
                            <a.group
                                name="link4_2-1"
                                position={[D4, 0, 0]}
                                rotation={rotation4}
                            >
                                <mesh
                                    name="matte_aluminum-6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["matte_aluminum-6"].geometry}
                                    material={materials["matte aluminum"]}
                                />
                                <mesh
                                    name="white_low_gloss_plastic-3"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["white_low_gloss_plastic-3"].geometry}
                                    material={materials["white low gloss plastic"]}
                                />
                                <a.group
                                    name="link5_2-1"
                                    position={[0, 0, 0]}
                                    rotation={rotation5}
                                >
                                    <mesh
                                        name="matte_aluminum-7"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes["matte_aluminum-7"].geometry}
                                        material={materials["matte aluminum"]}
                                    />
                                    <mesh
                                        name="black_medium_gloss_plastic-5"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes["black_medium_gloss_plastic-5"].geometry}
                                        material={materials["black medium gloss plastic-2"]}
                                    />
                                    <a.group
                                        name="link6-1"
                                        position={[0, 0.089, 0]}
                                        rotation={rotation6}
                                    >
                                        <mesh
                                            name="white_low_gloss_plastic-4"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes["white_low_gloss_plastic-4"].geometry}
                                            material={materials["white low gloss plastic"]}
                                        />
                                        <a.group
                                            name="ee-1"
                                            position={gripPos1}
                                            rotation={[Math.PI / 2, 0, 0]}
                                        >
                                            <mesh
                                                name="matte_aluminum-8"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes["matte_aluminum-8"].geometry}
                                                material={materials["matte aluminum-2"]}
                                            />
                                        </a.group>
                                        <a.group
                                            name="ee-1"
                                            position={gripPos2}
                                            rotation={[Math.PI / 2, Math.PI, 0]}
                                        >
                                            <mesh
                                                name="matte_aluminum-8"
                                                castShadow
                                                receiveShadow
                                                geometry={nodes["matte_aluminum-8"].geometry}
                                                material={materials["matte aluminum-2"]}
                                            />
                                        </a.group>
                                    </a.group>
                                </a.group>
                            </a.group>
                        </a.group>
                    </a.group>
                </a.group>
            </a.group>
        </a.group>
    );
}

useGLTF.preload("/3d/manipulator.draco.glb");