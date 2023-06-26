import axios from 'axios';

const KEY = '?api_key=6a9a83cfb600dbd7747b45c5dc18162e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day${KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};