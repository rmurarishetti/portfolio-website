import styles from './MessageBox.module.scss'
import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react'

function MessageBox() {
    const { data: session } = useSession()

    const inputRef = useRef(null);
    const [email, setEmail] = useState(session.user.email);
    const [image, setImage] = useState(session.user.image);
    const [fullName, setFullName] = useState(session.user.name);
    const [message, setMessage] = useState('');
    const [dateTime, setDateTime] = useState((new Date()).toISOString());
    const [submitted, setSubmitted] = useState(false)
    const handleChange = e => {
        setMessage(e.target.value);
        setSubmitted(false)
    };

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setEmail(session.user.email)
            setImage(session.user.image)
            setFullName(session.user.name)
            setDateTime((new Date()).toISOString())
            const body = { email, image, fullName, message, dateTime }
            await fetch("/api/guestbook/createMessage", {
                method: "POST",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(body),
            });
            setMessage('');
            setSubmitted(true)


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={[
            styles.messageBox,
            message ? styles.active : '',
            submitted ? styles.submitted : ''].join(' ')}>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={message}
                placeholder='Your message...' />
            <button onClick={submitHandler}>
                Submit
            </button>
            <div className={[styles.submitMessage, submitted ? styles.submitted : ''].join(' ')}>
                Message submitted, thanks!
            </div>
        </div>
    );
}

export default MessageBox;