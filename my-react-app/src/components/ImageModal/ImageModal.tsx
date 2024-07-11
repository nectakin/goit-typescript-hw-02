
import React, { FC } from 'react';
import ReactModal from 'react-modal';

import { HandleModalClose, Modal } from '../App/App.types';
import styles from './ImageModal.module.css';

interface ImageModalProps extends Modal {
  onClose: HandleModalClose;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  url,
  description,
  onClose,
}) => {
  return (
    <ReactModal
      portalClassName={styles.modalPortal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      <img src={url} alt={description} className={styles.modalImage} />
    </ReactModal>
  );
};
export default ImageModal;
