import styles from './Footer.module.scss'
import Link from 'next/link';
import { websiteData } from '../../../data/websiteData';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <Link
                    href="https://www.linkedin.com/in/rohitmurarishetti/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                </Link>
                
                <Link
                    href="https://github.com/rmurarishetti"
                    target="_blank"
                    rel="noreferrer">
                    GitHub
                </Link>
            </div>
            <div className={styles.main}>
                <div className={styles.note}>Last updated: {websiteData.lastUpdated}</div>
                <div className={styles.copyright}>© {websiteData.yearCreated} {websiteData.author}</div>
            </div>
        </footer>
    );
}

export default Footer;