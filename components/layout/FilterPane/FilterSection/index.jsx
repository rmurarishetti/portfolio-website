import { useState } from 'react';
import styles from './FilterSection.module.scss'

function FilterSection({ name, children }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className={[styles.filterSection, !expanded ? styles.collapsed : ''].join(' ')}>
            <div
                className={styles.filterSectionHeader}
                onClick={() => setExpanded(prev => !prev)}>
                <div className={styles.filterSectionTitle}>{name}</div>
                <div
                    className={styles.filterSectionExpander}>
                    {expanded ? '-' : '+'}
                </div>
            </div>
            <div className={styles.tags}>
                {children}
            </div>
        </div>
    );
}

export default FilterSection;