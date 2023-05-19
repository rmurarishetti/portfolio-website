import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/Guestbook.module.scss'
import { DateDiv } from '../components/badges';
import { GuestbookCard } from '../components/cards';
import { CommentDiv, CommentPlaceholder } from '../components/layout';
import useSWR from "swr";

function GuestBook() {
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR("/api/guestbook/getAllMessages", fetcher, {
        refreshInterval: 1000
    })

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

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
                        {/* <div className={styles.emoji}>✍️</div> */}
                        <div className={styles.text}>Guestbook</div>
                    </div>
                    <p>Sign my website and leave some feedback, appreciation or even humor!</p>
                </div>
                <GuestbookCard />
                {isLoading && (
                    <div className={styles.comments}>
                        {[...Array(10)].map((_, index) => (
                            <CommentPlaceholder key={index} />
                        ))}
                    </div>
                )}
                {!isLoading && (
                    <div className={styles.comments}>
                        {data && data.map(message => {
                            return (
                                <CommentDiv key={message.id} {...message} />
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default GuestBook;