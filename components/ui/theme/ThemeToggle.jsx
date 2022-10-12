import { useTheme } from 'next-themes';
import styles from './ThemeToggle.module.scss'

function ThemeToggle() {
    const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';

    const getFormattedTheme = (curTheme) => {
        if (curTheme == 'light' || curTheme == 'dark') {
            return curTheme;
        }
        if (typeof window === "undefined") {
            return 'dark';
        }
        return getSystemTheme();
    }

    const { theme, setTheme } = useTheme();

    let themeClass = getFormattedTheme(theme) == 'dark' ? styles.dark : styles.light;

    const toggleTheme = () => {
        setTheme(getFormattedTheme(theme) == 'dark' ? 'light' : 'dark');
    }

    return (
        <div onClick={toggleTheme} className={[styles.themeToggle, themeClass].join(' ')}>
            <div className={styles.sun}>🌞</div>
            <div className={styles.moon}>🌚</div>
        </div>
    );
}

export default ThemeToggle;