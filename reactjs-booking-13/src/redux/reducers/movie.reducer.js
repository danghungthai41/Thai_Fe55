import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from "../constants/movie.constant";
const initialState = {
  movieList: [],
  movieDetail: {},
};

const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIE_LIST: {
      // c1
      // state.movieList = payload;
      // return { ...state };
      // c2
      return { ...state, movieList: payload };
    }
    case GET_MOVIE_DETAIL: {
      return { ...state, movieDetail: payload };
    }
    default:
      return state;
  }
};

export default movieReducer;
