import Link from 'next/link'
import React from 'react'
import styles from './Logo.module.scss'

function Logo() {
    return (
        <Link href="/">
            <a className={styles.navLogo}>
                Rohit Nag
            </a>
        </Link>
    )
}

export default Logo