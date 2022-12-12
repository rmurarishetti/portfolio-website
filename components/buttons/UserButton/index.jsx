import styles from './UserButton.module.scss'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function UserButton() {
    const router = useRouter()
    const { data: session } = useSession()
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl: router.query.callbackUrl })
    }

    async function handleGoogleSignout() {
        signOut('google', { callbackUrl: router.query.callbackUrl })
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