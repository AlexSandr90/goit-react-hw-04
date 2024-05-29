import classes from './LoadMoreBtn.module.css';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ pageCounter }) => {
  return (
    <button className={classes.loadMoreBtn} onClick={pageCounter}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  pageCounter: PropTypes.func.isRequired,
};
