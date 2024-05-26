import './App.css';
import { fetchImages } from '../../fetch';

const App = () => {
  return (
    <>
      <button type="submit" onClick={() => fetchImages('beer')}>Search</button>
    </>
  );
};

export default App;
