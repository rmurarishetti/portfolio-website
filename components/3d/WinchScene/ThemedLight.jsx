import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';

function ThemedSpotlight() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const lightModeProps = {
        color: "white",
        position: [0, 0, 1],
        intensity: 2,
    }

    const darkModeProps = {
        color: "#cba2ff",
        position: [0, 1, 0.1],
        intensity: 1,
    }

    const themedLightProps = theme == 'dark' ? darkModeProps : lightModeProps;

    return (
        isMounted && <pointLight
            angle={0.14}
            penumbra={1}
            castShadow
            {...themedLightProps} />
    );
}

export default ThemedSpotlight;