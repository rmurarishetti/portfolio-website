import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCountDown } from '../helpers/hooks';
import { TimerCard } from '../components/cards';
import { MemoryGame } from '../components/games';
import { useAOS } from '../helpers/hooks';

function NotFound() {
    useAOS()
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
        counter == 0 ? router.push("/") : ''
    }, [counter, router])

    const handleHardPause = () => {
        setPaused(true)
        reset()
    }


    return (
        <>
            <Head>
                <title>Rohit Murarishetti | 404</title>
                <meta name="description" content="Not found page." />
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.errorPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.emoji}>😬</div>
                        <div className={styles.text}>OoOps</div>
                    </div>
                    <p>This page could not be found.</p>
                    <TimerCard seconds={timeOut} handlePause={handlePause} counter={counter} paused={paused}>Going back to&nbsp;<Link href="/"><a>home</a></Link>&nbsp;in</TimerCard>

                    <p className={styles.gamePrompt}>Or... try out a memory game below <br /> Flip and match pairs of cards.</p>
                </div>
                <div className={styles.game} onClick={handleHardPause} data-aos='fade-up'>
                    <MemoryGame setPaused={setPaused} />
                </div>
            </div>
        </>
    );
}

export default NotFound;