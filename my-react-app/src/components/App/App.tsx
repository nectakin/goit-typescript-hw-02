
import React, { useEffect, useRef, useState } from 'react';

import ErrorMessage from '../ErrorMessage';
import ImageGallery from '../ImageGallery';
import ImageModal from '../ImageModal';
import LoadMoreBtn from '../LoadMoreBtn';
import Loader from '../Loader';
import SearchBar from '../SearchBar';

import { fetchImages } from '../../api/unsplash-api';
import { Photo } from '../../api/unsplash-api.types';
import {
  HandleImageClick,
  HandleLoadMoreClick,
  HandleSearch,
  Modal,
} from './App.types';

const INITIAL_MODAL_INFO: Modal = {
  isOpen: false,
  url: '',
  description: '',
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryImages, setGalleryImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalInfo, setModalInfo] = useState(INITIAL_MODAL_INFO);

  const appRef = useRef<HTMLDivElement>(null);

  const handleSearch: HandleSearch = (newQuery: string) => {
    if (newQuery === searchQuery) return;

    setCurrentPage(1);
    setSearchQuery(newQuery);
    setGalleryImages([]);
  };

  const handleLoadMore: HandleLoadMoreClick = () =>
    setCurrentPage((prev) => prev + 1);

  const handleModalClose: HandleLoadMoreClick = () =>
    setModalInfo(INITIAL_MODAL_INFO);

  const handleImageClick: HandleImageClick = ({ url = '', description = '' }) =>
    setModalInfo({ isOpen: true, url, description });

  useEffect(() => {
    if (searchQuery === '') return;

    async function getImages() {
      setIsLoading(true);
      try {
        const data: Photo[] = await fetchImages(searchQuery, currentPage);

        if (data.length === 0) throw new Error('No results found');

        setGalleryImages((prev) => [...prev, ...data]);
      } catch (error) {
        setError(error as Error);
        throw new Error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    if (currentPage === 1) return;

    appRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [galleryImages, currentPage]);

  return (
    <div ref={appRef}>
      <SearchBar onSearch={handleSearch} />

      {isLoading && galleryImages.length === 0 && <Loader />}

      {galleryImages.length > 0 && (
        <>
          <ImageGallery items={galleryImages} onImageClick={handleImageClick} />

          {isLoading && <Loader />}
          {error && <ErrorMessage message={error.message} />}
          {!error && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}

      {error && galleryImages.length === 0 && (
        <ErrorMessage message={error.message} />
      )}

      {modalInfo.isOpen && (
        <ImageModal
          isOpen={modalInfo.isOpen}
          url={modalInfo.url}
          description={modalInfo.description}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
