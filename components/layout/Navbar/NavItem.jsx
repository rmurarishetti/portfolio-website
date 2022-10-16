import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'

function NavItem({ href, text, active }) {
    return (
        <Link href={href}>
            <a className={`${active ? styles.active : ""}`}>
                {text}
            </a>
        </Link>
    )
}

export default NavItem