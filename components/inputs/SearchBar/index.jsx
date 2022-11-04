import styles from './SearchBar.module.scss'

function SearchBar({ filterFunction }) {

    const handleChange = (e) => {
        filterFunction({ searchPhrase: e.target.value })
    }

    return (
        <input
            className={styles.search}
            type="text"
            onChange={handleChange}
            placeholder='Title or Description...'>

        </input>
    );
}

export default SearchBar;