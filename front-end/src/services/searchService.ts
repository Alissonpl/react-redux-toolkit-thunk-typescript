import { axiosInstanceSearch } from './index';

const pathSearch = 'image-video';

const getSearch = async (dateSearch: string) => {
  try {
    const response = await axiosInstanceSearch.get(`/${pathSearch}?q=${dateSearch}`);
    console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getSearch };
