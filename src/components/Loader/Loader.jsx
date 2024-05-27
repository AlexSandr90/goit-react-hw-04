import classes from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#3c2796"
      ariaLabel="ball-triangle-loading"
      wrapperClass={classes.loader}
      visible={true}
    />
  );
};

export default Loader;
