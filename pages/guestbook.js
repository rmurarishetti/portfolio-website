import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/Guestbook.module.scss'
import { DateDiv } from '../components/badges';
import { GuestbookCard } from '../components/cards';
import { CommentDiv } from '../components/layout';
import useSWR from "swr";

function GuestBook() {
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR("/api/guestbook/getAllMessages", fetcher, {
        refreshInterval: 1000
    })

    // const sortedData = data.sort((a, b) => {
    //     return (new Date(a.dateTime) > new Date(b.dateTime))
    // })
    // console.log(sortedData)

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
                <div className={styles.comments}>
                    {data && data.map(message => {
                        return (
                            <CommentDiv key={message.id} {...message} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default GuestBook;