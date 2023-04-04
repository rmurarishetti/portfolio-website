import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import NavItem from './NavItem'
import Logo from './Logo'
import styles from './Navbar.module.scss'
import MenuToggle from './MenuToggle'
import { ThemeToggle } from '../../buttons'
import { pagesData } from '../../../data/pagesData';

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);



    // useEffect(() => {
    //     const controlNavbar = () => {
    //         if (typeof window !== 'undefined') {
    //             if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
    //                 setShow(false);
    //             } else { // if scroll up show the navbar
    //                 setShow(true);
    //             }

    //             // remember current page location to use in the next move
    //             setLastScrollY(window.scrollY);
    //         }
    //     };
    //     if (typeof window !== 'undefined') {
    //         window.addEventListener('scroll', controlNavbar);

    //         // cleanup function
    //         return () => {
    //             window.removeEventListener('scroll', controlNavbar);
    //         };
    //     }
    // }, [lastScrollY]);

    const [collapsed, setCollapsed] = useState(true);

    const toggleMenu = () => {
        setCollapsed(previousState => {
            return !previousState
        });
    }

    const router = useRouter()

    const isSubPage = (parentPageLink) => {
        const currentPath = router.asPath
        return currentPath.includes(parentPageLink) && currentPath !== parentPageLink && parentPageLink !== '/'
    }

    return (
        <nav
            className={[styles.navContainer,
            collapsed ? styles.collapsed : styles.expanded,
            show ? null : styles.hidden].join(' ')}>
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
                                    active={router.asPath == page.link}
                                    subActive={isSubPage(page.link)} />
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