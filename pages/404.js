import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter();


    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [router])


    return (
        <>
            <Head>
                <title>Rohit Nag | 404</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.errorPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>😬</div>
                        <div className={styles.text}>OoOps</div>
                    </div>
                    <p>This page could not be found.</p>
                    <p>⏳ Going back to <Link href="/"><a>home</a></Link> in .</p>
                </div>
            </div>
        </>
    );
}

export default NotFound;