import styles from './UserButton.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

function UserButton() {
    const { data: session } = useSession()
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: 'http://localhost:3000/guestbook' })
    }

    async function handleGoogleSignout() {
        signOut('google', { callbackUrl: 'http://localhost:3000/guestbook' })
    }
    console.log(session)

    const userName = session ? session.user.name : null
    const userImg = session ? session.user.image : null
    return (
        <button
            className={[styles.button, session ? styles.logOut : ''].join(' ')}
            onClick={session ? handleGoogleSignout : handleGoogleSignin}>
            {session ?
                <>
                    <Image src={userImg} width={30} height={30} alt={`${userName}`}></Image>
                    <div className={styles.tooltip}>Log out</div>
                </>
                :
                'Log in'}
        </button>
    );
}

export default UserButton;