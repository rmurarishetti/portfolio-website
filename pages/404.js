import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCountDown } from '../helpers/hooks';
import { TimerCard } from '../components/cards';

function NotFound() {
    const router = useRouter();
    const timeOut = 5;
    const [counter, start, pause, reset] = useCountDown(timeOut, 1000);
    const [paused, setPaused] = useState(true)

    useEffect(() => {
        setPaused(false)
    }, [])

    useEffect(() => {
        paused ? pause() : start()
    }, [paused, pause, start])

    const handlePause = () => {
        setPaused((prev) => !prev)
    }

    useEffect(() => {
        console.log(counter)
        counter == 0 ? router.push("/") : ''
    }, [counter, router])


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
                    <TimerCard seconds={timeOut} handlePause={handlePause}>Going back to&nbsp;<Link href="/"><a>home</a></Link>&nbsp;in</TimerCard>
                </div>
            </div>
        </>
    );
}

export default NotFound;