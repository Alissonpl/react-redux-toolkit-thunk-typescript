import { axiosInstanceSearch } from "./index";

const pathSearch = "image-video";

const getSearch = async (dateSearch: string) => {
  try {
    const response = await axiosInstanceSearch.get(
      `/${pathSearch}?search=${dateSearch}`,
      {}
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getSearch };
