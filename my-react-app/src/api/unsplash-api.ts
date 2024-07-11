
import axios from 'axios';
import { FetchImages } from './unsplash-api.types';

const API_KEY = 'jjCRPzrxadrk_T1R5NACzD0KTZUZsKPkF_iarTpTaMU';
const BASE_URL = `https://api.unsplash.com/search/photos/`;

const options = {
  headers: { Authorization: `Client-ID ${API_KEY}` },
};

export const fetchImages: FetchImages = async (query: string, page: number) => {
  const searchParams: Record<string, any> = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: '20',
  });

  return (await axios(`${BASE_URL}?${searchParams}`, options)).data.results;
};
