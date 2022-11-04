import { useTheme } from 'next-themes';
import styles from './ThemeToggle.module.scss'
import { useState, useEffect } from 'react';

function ThemeToggle() {

    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [themeClass, setThemeClass] = useState(theme)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        setThemeClass(theme == 'dark' ? styles.dark : styles.light)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }

    return (
        isMounted && <div onClick={toggleTheme} className={[styles.themeToggle, themeClass].join(' ')}>
            <div className={[styles.icon, styles.sun].join(' ')}>
                <div>🌞</div>
            </div>
            <div className={[styles.icon, styles.moon].join(' ')}>
                <div>🌚</div>
            </div>
        </div>
    );
}

export default ThemeToggle;