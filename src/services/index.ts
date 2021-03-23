import axios from 'axios';

const axiosConfigDefault = { timeout: 30000, maxRedirects: 0 };

const { API_NASA } = process.env;

const axiosInstanceSearch = axios.create({ ...axiosConfigDefault, baseURL: API_NASA });

export { axiosInstanceSearch };

export * from './searchService';
