import ImageCard from '../ImageCard/ImageCard';
import classes from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={classes.imageGallery}>
      {images.map((imageItem) => (
        <li key={imageItem.id} className={classes.galleryItem}>
          <ImageCard imageItem={imageItem} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
