import classes from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ initial }) => {
  return (
    <div className={initial ? classes.initialLoader : classes.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3c2796"
        ariaLabel="ball-triangle-loading"
        // wrapperClass={classes.loader}
        visible={true}
      />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  initial: PropTypes.bool,
};
