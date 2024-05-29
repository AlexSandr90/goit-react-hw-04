import classes from './ImageModal.module.css';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const ImageModal = ({ isOpen, dataImage, toggleModalOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModalOpen}
      overlayClassName={classes.overlay}
      className={classes.imageModal}
      contentLabel="Image Modal"
      ariaHideApp={false} 
    >
      <img src={dataImage?.urls?.regular} alt={dataImage?.alt_description} />
    </ReactModal>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dataImage: PropTypes.object.isRequired,
  toggleModalOpen: PropTypes.func.isRequired,
};
