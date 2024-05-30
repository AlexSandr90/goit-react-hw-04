import './App.css';
import { fetchImages } from '../../fetch';
import { scrolledImages } from '../../utils';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataImage, setDataImage] = useState({});

  const handleSearch = async (searchValue) => {
    return await fetchImages(searchValue, page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        if (page === 1) setImages([]);

        setLoading(true);
        const imagesData = await handleSearch(searchValue, page);
        const { results, total_pages } = imagesData;

        setImages((prevImages) =>
          page > 1 ? [...prevImages, ...results] : results
        );
        setTotalPages(total_pages);

        if (page > 1) {
          scrolledImages();
        }
      } catch (error) {
        setError(true);
        setSearchValue('');
      } finally {
        setLoading(false);
      }
    };

    searchValue.length > 0 && fetchData();
  }, [searchValue, page]);

  const pageCounter = () => {
    if (totalPages > 0 && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const toggleModalOpen = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <SearchBar onSearch={setSearchValue} />
      {loading && page === 1 && <Loader initial />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          modalOpened={toggleModalOpen}
          setDataImage={setDataImage}
        />
      )}
      {loading && images.length > 1 ? (
        <Loader />
      ) : (
        images.length > 0 &&
        !loading && <LoadMoreBtn pageCounter={pageCounter} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        dataImage={dataImage}
        toggleModalOpen={toggleModalOpen}
      />
    </>
  );
};

export default App;
