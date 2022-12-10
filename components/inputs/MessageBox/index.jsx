import styles from './MessageBox.module.scss'
import { useState, useRef, useEffect } from 'react';

function MessageBox() {

    const inputRef = useRef(null)
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setMessage(e.target.value);
    };

    return (
        <div className={[styles.messageBox, message ? styles.active : ''].join(' ')}>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={message}
                placeholder='Your message...' />
            <button>Submit</button>
        </div>
    );
}

export default MessageBox;