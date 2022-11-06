import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import NavItem from './NavItem'
import Logo from './Logo'
import styles from './Navbar.module.scss'
import MenuToggle from './MenuToggle'
import { ThemeToggle } from '../../buttons'
import { pagesData } from '../../../data/pagesData';

function Navbar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleMenu = () => {
        setCollapsed(previousState => {
            return !previousState
        });
    }

    const router = useRouter()


    return (
        <nav className={[styles.navContainer, collapsed ? styles.collapsed : styles.expanded].join(' ')}>
            <div className={styles.nav}>
                <div className={styles.menuToggleContainer}>
                    <MenuToggle onclick_event={toggleMenu} expanded={!collapsed} />
                </div>

                <div className={styles.logoContainer}>
                    <Logo />
                </div>

                <div className={styles.navItems}>
                    {pagesData.map((page) => {
                        return (
                            <div key={page.title} onClick={toggleMenu}>
                                <NavItem
                                    link={page.link}
                                    title={page.title}
                                    active={router.asPath == page.link} />
                            </div>
                        )
                    })}
                </div>

                <div className={styles.themeToggleContainer}>
                    <ThemeToggle />
                </div>
            </div>


        </nav>
    )
}

export default Navbar