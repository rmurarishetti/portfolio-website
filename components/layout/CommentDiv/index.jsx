import styles from './CommentDiv.module.scss'
import Image from 'next/image';
import { DateDiv } from '../../badges';
import { useSession } from 'next-auth/react'

function CommentDiv({ id, email, image, fullName, message, dateTime }) {
    const { data: session } = useSession()
    const editable = session ? session.user.email == email : false;

    const deleteComment = async (messageId) => {
        try {
            const response = await fetch(`/api/guestbook/${messageId}`, {
                method: 'DELETE'
            })
            // const data = await response.json()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.message}>{message}</div>
            <div className={styles.footer}>
                <div className={styles.person}>
                    <div className={styles.icon}>
                        <Image
                            src={image}
                            width={20}
                            height={20}
                            alt={`${fullName}_image`} />
                    </div>
                    <div className={styles.name}>{fullName}</div>
                </div>
                <div className={styles.seperator}>/</div>
                <div className={styles.date}>
                    <DateDiv start={new Date(dateTime)} longDate />
                </div>
                {editable &&
                    <>
                        <div className={styles.seperator}>/</div>
                        <div
                            className={styles.deleteButton}
                            onClick={() => deleteComment(id)}>
                            Delete
                        </div>
                    </>}
            </div>
        </div>
    );
}

export default CommentDiv;