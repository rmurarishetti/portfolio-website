import styles from './ComputerKey.module.scss'

function ComputerKeyIcon({ active = false, char = 'R' }) {
    return (
        <div className={[styles.key, active ? styles.interacted : ''].join(' ')}>
            {char}
        </div>
    );
}

export default ComputerKeyIcon;