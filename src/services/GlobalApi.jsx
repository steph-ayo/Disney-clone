import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "d016735c3a1ad413e8b8919e854b0e32";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=d016735c3a1ad413e8b8919e854b0e32";

//   https://api.themoviedb.org/3/trending/all/day?api_key=d016735c3a1ad413e8b8919e854b0e32

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
