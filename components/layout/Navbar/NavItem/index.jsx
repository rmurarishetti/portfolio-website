import Link from 'next/link'
import React from 'react'
import styles from './NavItem.module.scss'

function NavItem({ link, title, active }) {
    return (
        <Link href={link}>
            <a className={[styles.navItem, active ? styles.active : ""].join(' ')}>
                <div className={styles.text}>{title}</div>
            </a>
        </Link>
    )
}

export default NavItem