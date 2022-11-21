import { useState, useEffect } from 'react';
import styles from './IconButton.module.scss'
import Image from 'next/image';

function IconButton({ iconPath, active, id, handleSelected }) {


    return (
        <div
            className={[styles.iconButton, active ? styles.active : ''].join(' ')}
            onClick={() => handleSelected(id)}>
            <img src={iconPath} alt={'logo'} className={styles.icon}></img>
        </div >
    );
}

export default IconButton;