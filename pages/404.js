import styles from '../styles/NotFound.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [router])


    return (
        <div className={styles.container}>
            <h1>😬😐Ps...</h1>
            <h2>This page could not be found</h2>
            <p>Go back to <Link href="/"><a>home</a></Link> .</p>
        </div>
    );
}

export default NotFound;