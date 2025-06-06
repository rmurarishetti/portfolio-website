import styles from './FilterPane.module.scss'
import { useState, useEffect, useRef } from 'react';
import { TagFilterToggle, ClearFilterButton } from '../../buttons';
import { SearchBar } from '../../inputs';
import FilterSection from './FilterSection';

function FilterPane({ name, count, filterFunction, typeFilterState, tagsFilterState, selectableTags, selectableTypes }) {
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
            <div className={styles.searchSection}>
                <SearchBar forceClear={clearSearch} filterFunction={filterFunction} />
            </div>
            <FilterSection name='Type'>
                {Object.keys(typeFilterState).map((type) => {
                    const selectable = selectableTypes.has(type)
                    return (
                        <TagFilterToggle
                            key={type}
                            onClick={() => {
                                filterFunction({ type: type })
                            }}
                            forceDisable={!Boolean(count)}
                            selectable={selectable}
                        >
                            {type}
                        </TagFilterToggle>
                    )
                })}
            </FilterSection>
            <FilterSection name='Tags'>
                {Object.keys(tagsFilterState).map((tag) => {
                    const selectable = selectableTags.has(tag)
                    return (
                        <TagFilterToggle
                            key={tag}
                            onClick={() => {
                                filterFunction({ tag: tag })
                            }}
                            forceDisable={!Boolean(count)}
                            selectable={selectable}>
                            {tag}
                        </TagFilterToggle>
                    )
                })}
            </FilterSection>
        </div>
    );
}

export default FilterPane