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

export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}${KEY}&language=en-US`);
  return response.data;
};

export const searchMovies = async searchValue => {
  const response = await axios.get(
    `/search/movie${KEY}&query=${searchValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};



export const getMovieReviews = async movieId => {
    const response = await axios.get(
      `/movie/${movieId}/reviews${KEY}&language=en-US&page=1`
    );
    return response.data.results.map(({ author, content, id }) => {
      return {
        author,
        content,
        id,
      };
    });
  };
  

  export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits${KEY}&language=en-US`
  );

  return response.data.cast
  // return response.data.results.map(({ name, character, profile_path, id }) => {
  //   return {
  //     name,
  //     character,
  //     profile_path,
  //     id,
  //   };
  // });
};
