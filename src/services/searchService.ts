import { axiosInstanceSearch } from './index';

const pathSearch = 'search';

const getSearch = async (dataSearch: string) => {
  try {
    const response = await axiosInstanceSearch.get(`${pathSearch}?q=${dataSearch}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getSearch };
