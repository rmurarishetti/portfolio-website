import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'
import styles from './Navbar.module.scss'
import MenuToggle from './MenuToggle'
import { useState } from 'react'

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Projects",
        href: "/projects"
    },
    {
        text: "Art",
        href: "/art"
    },
    {
        text: "Graphics",
        href: "/graphics"
    },
    {
        text: "About",
        href: "/about"
    }
]

function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

    const toggleMenu = () => {
        setCollapsed(previousState => {
            return !previousState
        });
    }

    let nav_class = collapsed ? styles.collapsed : styles.expanded;

    return (
        <nav className={[styles.nav, nav_class].join(' ')}>
            <MenuToggle onclick_event={toggleMenu} />

            <Link href={"/"}>
                <a className={styles.logo}>
                    Rohit Nag
                </a>
            </Link>

            <div className={styles.nav__menu_list}>
                {MENU_LIST.map((menu, idx) => {
                    return (
                        <div key={menu.text} className={styles.nav__item}>
                            <NavItem {...menu} />
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar