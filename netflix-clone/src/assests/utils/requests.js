//
//
const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchtrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixoriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/dicover/movie?api_key=${API_KEY}&with_genres=1074`,
  fetchDocumentaries: `/dicover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
