import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/Guestbook.module.scss'
import { DateDiv } from '../components/badges';
import { GuestbookCard } from '../components/cards';

function Graphics() {

    return (
        <>
            <Head>
                <title>Rohit Nag | Guestbook</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
                <meta name="description" content="Leave a comment." />
            </Head>
            <div className={styles.guestbookPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>✍️</div>
                        <div className={styles.text}>Guestbook</div>
                    </div>
                    <p>Sign my website and leave some feedback, appreciation or even humor!</p>
                </div>
                <GuestbookCard />
            </div>
        </>
    );
}

export default Graphics;