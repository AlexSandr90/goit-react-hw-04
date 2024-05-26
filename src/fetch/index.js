import axios from 'axios';

const ACCESS_KEY = import.meta.env.REACT_APP_ACCESS_KEY;
const BASE_URL = `${import.meta.env.REACT_APP_BASE_API}/search/photos`;

export const fetchImages = async (searchValue = '', page = 1) => {
  console.log('Query data: ', ACCESS_KEY, BASE_URL, searchValue, page);

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        client_id: ACCESS_KEY,
        page: page,
        query: searchValue,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    console.log('response', response);
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};
