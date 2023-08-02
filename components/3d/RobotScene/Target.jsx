import { PivotControls, Html } from "@react-three/drei";
import { useState } from "react";
import { isInsideWorkspace } from "../../../helpers/math";
import { useSpring, animated as a } from '@react-spring/three';

export function Target({ D1, A3, D4, AE, reference, basePosition, baseRotation, setIsDraggingTarget, followTarget, matrix }) {

    const [draggable, setDraggable] = useState(true);
    const [clicked, setClicked] = useState(true);
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        setDraggable(false);
    }

    const handleDragStart = () => {
        setDraggable(true)
        setIsDraggingTarget(true);
    }
    const handleDragEnd = () => {
        setIsDraggingTarget(false);
    }

    const handleDrag = (l, dl, w, dw) => {
        // reference.current.matrix.copy(l);
        if (reference.current) {
            const position = l.elements.slice(12, 15);
            if (isInsideWorkspace(position, D1, A3, D4, AE)) {
                reference.current.matrix.copy(l);
            }
            else {
                setDraggable(false)
            }
        }
    }

    const { targetColor, targetEmissiveIntensity, boxOpacity } = useSpring({
        targetColor: draggable ? '#854DFF' : '#FF00CC',
        targetEmissiveIntensity: draggable ? 1 : 0,
        boxOpacity: followTarget ? 1 : (hovered ? 0.7 : 0.5),
        config: { mass: 1, tension: 500, friction: 50 }
    })

    return (
        <a.group
            name="target"
            position={basePosition}
            rotation={baseRotation}
        >
            <PivotControls
                matrix={matrix}
                rotation={[0, 0, 0]}
                anchor={[0, 0, 0]}
                scale={100}
                depthTest={true}
                fixed
                lineWidth={3}
                ref={reference}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                autoTransform={false}
                disableAxes={!clicked}
                disableRotations={!clicked}
                displayValues={false}
                visible={hovered || clicked}
                opacity={hovered ? 0.5 : 1}

            >
                {/* Create a transparent bounding box */}
                <a.mesh
                    castShadow
                    receiveShadow
                    onClick={handleClick}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <boxGeometry args={[0.018, 0.1, 0.04]} />
                    <a.meshPhysicalMaterial
                        color={targetColor}
                        emissive={targetColor}
                        emissiveIntensity={targetEmissiveIntensity}
                        opacity={boxOpacity}
                        transparent
                        clearcoat={1}
                    />
                </a.mesh>

                <Html center style={{ whiteSpace: 'nowrap', pointerEvents: 'none', fontSize: '0.7rem', display: 'flex', opacity: hovered ? 1 : 0, transform: 'translate(-50%, 100%)', padding: '0.3rem 0.6rem', backdropFilter: 'blur(10px)', background: 'var(--color-glass)', borderRadius: '0.3rem', border: 'var(--border-secondary)', transition: 'opacity var(--speed-medium)' }}>{clicked ? 'hide' : 'show'} controls</Html>
            </PivotControls>
        </a.group>
    );
}