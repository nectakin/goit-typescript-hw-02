
import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';

import React, { FC, FormEvent } from 'react';
import { HandleSearch } from '../App/App.types';
import styles from './SearchBar.module.css';
import { FormElements } from './SearchBar.types';

const notify = () => toast.error('Search query cannot be empty');
const toasterOptions = {
  error: {
    style: {
      background: 'red',
      color: 'white',
    },
  },
};

interface SearchBarProps {
  onSearch: HandleSearch;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (
      e.currentTarget.elements as FormElements
    ).search.value.trim();

    if (searchQuery === '') {
      notify();
      return;
    }

    onSearch(searchQuery);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleFormSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={styles.buttonSearch}>
          <IoIosSearch className={styles.searchIcon} />
        </button>
      </form>
      <Toaster position="top-left" toastOptions={toasterOptions} />
    </header>
  );
};
export default SearchBar;
