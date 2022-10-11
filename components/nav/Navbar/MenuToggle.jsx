import styles from './Navbar.module.scss'

function MenuToggle({ onclick_event }) {
    return (
        <div className={styles.menu_toggle} onClick={onclick_event}>
            <div className={styles.top_bar} />
            <div className={styles.bottom_bar} />
        </div>
    );
}

export default MenuToggle;