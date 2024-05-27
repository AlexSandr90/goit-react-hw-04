import classes from './ImageCard.module.css';
import PropTypes from 'prop-types';

const ImageCard = ({ imageItem }) => {
  return (
    <div className={classes.imageCard}>
      <img
        src={imageItem.urls.small}
        alt={imageItem.alt_description}
        className={classes.image}
      />
    </div>
  );
};

export default ImageCard;

ImageCard.propTypes = {
  imageItem: PropTypes.object.isRequired,
};
