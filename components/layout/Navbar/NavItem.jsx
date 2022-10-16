import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'

function NavItem({ link, title, active }) {
    return (
        <Link href={link}>
            <a className={`${active ? styles.active : ""}`}>
                {title}
            </a>
        </Link>
    )
}

export default NavItem