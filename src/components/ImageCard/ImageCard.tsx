
import React, { FC } from 'react';
import styles from './ImageCard.module.css';

interface ImageCardProps {
  url: string;
  description: string;
  onImageClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ url, description, onImageClick }) => {
  return (
    <div>
      <img
        className={styles.image}
        src={url}
        alt={description}
        onClick={() => onImageClick()}
      />
    </div>
  );
};
export default ImageCard;
