import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a
                    href="https://www.linkedin.com/in/rohit-nag/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                </a>
                <a
                    href="https://www.instagram.com/rohitnag_art"
                    target="_blank"
                    rel="noreferrer">
                    Instagram
                </a>
                <a
                    href="https://github.com/RohitNag11"
                    target="_blank"
                    rel="noreferrer">
                    GitHub
                </a>
            </div>
            <div className={styles.main}>
                <div className={styles.note}>Last updated: 13/01/2023</div>
                <div className={styles.copyright}>© 2022 Rohit Nag</div>
            </div>
        </footer>
    );
}

export default Footer;