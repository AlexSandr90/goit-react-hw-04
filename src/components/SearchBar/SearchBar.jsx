import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <header className={classes.searchBar}>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
