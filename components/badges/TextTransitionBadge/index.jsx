import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

function TextTransitionBadge({ textArray, speed }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index => index + 1)
        }, speed);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <TextTransition
            inline
            springConfig={presets.slow}
            direction='down'
            style={{ display: 'inline' }}>
            <em>{index ? textArray[index % textArray.length] : ''}</em>
        </TextTransition>
    );
}

export default TextTransitionBadge;