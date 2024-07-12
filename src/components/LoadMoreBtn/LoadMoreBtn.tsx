
import React, { FC } from 'react';
import { HandleLoadMoreClick } from '../App/App.types';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: HandleLoadMoreClick;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
