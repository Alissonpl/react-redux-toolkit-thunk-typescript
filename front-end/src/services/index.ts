import axios from 'axios';

const axiosConfigDefault = { timeout: 30000, maxRedirects: 0 };

const { REACT_APP_API_NASA } = process.env;

const axiosInstanceSearch = axios.create({ ...axiosConfigDefault, baseURL: REACT_APP_API_NASA });

export { axiosInstanceSearch };

export * from './searchService';
