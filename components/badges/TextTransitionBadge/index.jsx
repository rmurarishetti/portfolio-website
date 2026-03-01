import { useState, useEffect } from "react";

// Simplified — react-text-transition removed, replaced with basic cycling
function TextTransitionBadge({ textArray, speed }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % textArray.length);
        }, speed);
        return () => clearInterval(timer);
    }, [textArray, speed]);

    return <em>{textArray[index]}</em>;
}

export default TextTransitionBadge;
