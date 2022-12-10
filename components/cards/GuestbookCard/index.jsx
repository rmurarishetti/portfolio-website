import styles from './GuestbookCard.module.scss'
import { MessageBox } from '../../inputs';
import { UserButton } from '../../buttons';
import { useSession, signIn, signOut } from 'next-auth/react'

function GuestbookCard() {
    const { data: session } = useSession()

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Sign the Guestbook
                </div>
                <UserButton />
            </div>
            <div className={styles.input}>
                {session && <MessageBox />}
            </div>
            <div className={styles.footer}>
                Your information is only used to display your name and message.
            </div>
        </div>
    );
}

export default GuestbookCard;