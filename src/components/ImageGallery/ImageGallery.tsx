
import React, { FC } from 'react';

import ImageCard from '../ImageCard';

import { Photo } from '../../api/unsplash-api.types';

import { HandleImageClick } from '../App/App.types';

import styles from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Photo[];
  onImageClick: HandleImageClick;
}

const ImageGallery: FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {items.map(({ id, urls: { small, regular }, description }) => (
        <li key={id} className={styles.galleryItem}>
          <ImageCard
            url={small}
            description={description}
            onImageClick={() => onImageClick({ url: regular, description })}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
