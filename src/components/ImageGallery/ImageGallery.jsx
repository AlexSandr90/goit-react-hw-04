import ImageCard from '../ImageCard/ImageCard';
import classes from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, modalOpened, setDataImage }) => {
  return (
    <ul className={classes.imageGallery}>
      {images.map((imageItem) => (
        <li key={imageItem.id} className={classes.galleryItem}>
          <ImageCard
            imageItem={imageItem}
            modalOpened={modalOpened}
            setDataImage={setDataImage}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalOpened: PropTypes.func.isRequired,
  setDataImage: PropTypes.func.isRequired,
};
