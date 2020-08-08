import axios from "axios";

//base url to make requests to the movie database
const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});

// example: instance.get(/some-movie) => https://developers.themoviedb.org/3/some-movie

export default instance;
