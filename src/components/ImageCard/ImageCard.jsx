import classes from './ImageCard.module.css';
import PropTypes from 'prop-types';

const ImageCard = ({ imageItem, modalOpened, setDataImage }) => {
  const handleImageClick = () => {
    setDataImage(imageItem);
    modalOpened();
  };
  return (
    <div className={classes.imageCard} onClick={handleImageClick}>
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
  modalOpened: PropTypes.func.isRequired,
  setDataImage: PropTypes.func.isRequired,
};
