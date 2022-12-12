import styles from './UserButton.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

function UserButton() {
    const { data: session } = useSession()
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: 'https://rohitnag.com/guestbook' })
    }

    async function handleGoogleSignout() {
        signOut('google', { callbackUrl: 'https://rohitnag.com/guestbook' })
    }

    const userName = session ? session.user.name : null
    const userImg = session ? session.user.image : null
    return (
        <button
            className={[styles.button, session ? styles.logOut : ''].join(' ')}
            onClick={session ? handleGoogleSignout : handleGoogleSignin}>
            {session ?
                <>
                    <div className={styles.imageWrapper}>
                        <Image src={userImg} width={30} height={30} alt={`${userName}`}></Image>
                    </div>
                    <div className={styles.tooltip}>Log out</div>
                </>
                :
                'Log in'}
        </button>
    );
}

export default UserButton;