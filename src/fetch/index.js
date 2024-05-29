import axios from 'axios';

const ACCESS_KEY = '2PQEVp3BEVCORHcnkrdmeLtFotNEzWZXSJ3rUQIB6OQ';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (searchValue = '', page = 1) => {
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

    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};
