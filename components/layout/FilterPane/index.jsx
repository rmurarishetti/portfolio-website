import styles from './FilterPane.module.scss'
import { useState, useEffect, useRef } from 'react';
import { TagFilterToggle, ClearFilterButton } from '../../buttons';
import { SearchBar } from '../../inputs';

function FilterPane({ name, count, filterFunction, typeFilterState, tagsFilterState }) {
    const [clearSearch, setClearSearch] = useState(false)

    useEffect(() => {
        setClearSearch(false)
    }, [count])

    return (
        <div className={styles.filterPane}>
            <div className={styles.header}>
                <h3>Filter {name}</h3>
                <ClearFilterButton count={count} clearFilterFunction={() => {
                    filterFunction({ clear: true })
                    setClearSearch(true)
                }} />
            </div>
            <div className={styles.filterSection}>
                <SearchBar forceClear={clearSearch} filterFunction={filterFunction} />
            </div>
            <div className={styles.filterSection}>
                <h4>Type</h4>
                <div className={styles.tags}>
                    {Object.keys(typeFilterState).map((type) => {
                        return (
                            <TagFilterToggle
                                key={type}
                                onClick={() => {
                                    filterFunction({ type: type })
                                }}
                                forceDisable={!Boolean(count)}>
                                {type}
                            </TagFilterToggle>
                        )
                    })}
                </div>
            </div>
            <div className={styles.filterSection}>
                <h4>Tags</h4>
                <div className={styles.tags}>
                    {Object.keys(tagsFilterState).map((tag) => {
                        return (
                            <TagFilterToggle
                                key={tag}
                                onClick={() => {
                                    filterFunction({ tag: tag })
                                }}
                                forceDisable={!Boolean(count)}>
                                {tag}
                            </TagFilterToggle>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default FilterPane