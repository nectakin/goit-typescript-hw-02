
import React, { FC } from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
export default ErrorMessage;
