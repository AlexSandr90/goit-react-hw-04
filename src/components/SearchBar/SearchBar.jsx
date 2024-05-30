import { FaSearch } from 'react-icons/fa';
import classes from './SearchBar.module.css';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch, onPageNumber }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchImage = form.image.value.trim();
    if (searchImage.length === 0) {
      toast.error('Please fill in the search field', {
        position: 'top-right',
        duration: 3000,
        style: { color: 'red' },
      });
      return;
    }
    onSearch(searchImage);
    onPageNumber(1);
    form.reset();
  };

  return (
    <header className={classes.searchBar}>
      <form className={classes.searchForm} onSubmit={handleSubmit}>
        <input
          name="image"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={classes.searchInput}
        />

        <button type="submit" className={classes.searchButton}>
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onPageNumber: PropTypes.func.isRequired,
};
