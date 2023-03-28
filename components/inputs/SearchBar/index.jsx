import styles from './SearchBar.module.scss'
import { useState, useRef, useEffect } from 'react';

function SearchBar({ filterFunction, forceClear }) {

    const inputRef = useRef(null)
    const [message, setMessage] = useState('');

    const handleChange = e => {
        setMessage(e.target.value);
    };

    const handleClear = e => {
        setMessage('');
    };

    useEffect(() => {
        forceClear ? setMessage('') : null;
    }, [forceClear]);

    useEffect(() => {
        filterFunction({ searchPhrase: message });
    }, [filterFunction, message]);

    return (
        <div className={[styles.searchBar, message ? styles.active : ''].join(' ')}>
            <div className={styles.icon}>🔍</div>
            <input
                ref={inputRef}
                type="text"
                onChange={handleChange}
                value={message}
                placeholder='Search...' />
            <button onClick={handleClear}>✕</button>

        </div>
    );
}

export default SearchBar;