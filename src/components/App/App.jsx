import './App.css';
import { fetchImages } from '../../fetch';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [totalImagesCount, setTotalImagesCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (searchValue) => {
    return await fetchImages(searchValue, page);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue.length > 0) {
        try {
          setError(false);
          if (page === 1) setImages([]);

          setLoading(true);
          const imagesData = await handleSearch(searchValue, page);
          const { results, total, total_pages } = imagesData;

          setImages((prevImages) =>
            page > 1 ? [...prevImages, ...results] : results
          );
          setTotalImagesCount(total);
          setTotalPages(total_pages);
        } catch (error) {
          setError(true);
          setSearchValue('');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [searchValue, page]);

  const pageCounter = () => {
    if (totalPages > 0 && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <SearchBar onSearch={setSearchValue} />
      {loading && page === 1 && <Loader initial />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && images.length > 1 ? (
        <Loader />
      ) : (
        images.length > 0 &&
        !loading && <LoadMoreBtn pageCounter={pageCounter} />
      )}
    </>
  );
};

export default App;
