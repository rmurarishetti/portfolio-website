import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from './Logo.module.scss'
import logo from '../../../../public/images/icons/favicon-32x32.png'

function Logo() {
    return (
        <Link href="/">
            <a className={styles.navLogo}>
                {/* <Image
                    src={logo}
                    alt='rohitnag.com Logo' /> */}
                <div className={styles.background}>
                    <div className={styles.text}>rn</div>
                    <div className={styles.underline}>
                        <div className={styles.dot}></div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Logo