import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

const useCorrectedTheme = () => {
    const { theme, setTheme } = useTheme();
    if (theme !== 'system') {
        return theme
    }
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return 'dark'
    }
    return 'light'
};

export { useCorrectedTheme };