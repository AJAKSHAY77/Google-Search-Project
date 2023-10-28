import axios from "axios";

const BASE_URl = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCPVdozhqyDLbgZpQhFCHqkJA9XMam0Nv8",
  cx: "b6c43b6ae894d4014",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URl, {
    params: { ...params, ...payload },
  });
  return data;
};
