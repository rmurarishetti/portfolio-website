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

    function toTitleCase(str) {
        if (!str) return str;

        return str.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase());
    }
    const formattedName = toTitleCase(fullName)

    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Image
                    src={image}
                    width={40}
                    height={40}
                    layout='fill'
                    objectPosition={'center'}
                    alt={`${fullName}_image`} />
            </div>
            <div className={styles.text}>
                <div className={styles.header}>
                    <div className={styles.name}>{formattedName}</div>
                    <div className={styles.seperator}>·</div>
                    <div className={styles.date}>
                        <DateDiv start={new Date(dateTime)} longDate day />
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
                <div className={styles.message}>{message}</div>
            </div>
        </div>
    );
}

export default CommentDiv;