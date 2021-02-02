import axios from "axios";
import { GET_MOVIE_LIST, GET_MOVIE_DETAIL } from "../constants/movie.constant";
// action creator
export const getMovieListAction = (movieList) => {
  // call api
  return {
    type: GET_MOVIE_LIST,
    payload: movieList,
  };
};

export const getMovieListAPI = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    })
      .then((res) => {
        dispatch(getMovieListAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMovieDetailAction = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL,
    payload: movieDetail,
  };
};

export const getMovieDetailAPI = (movieCode) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
    })
      .then((res) => {
        dispatch(getMovieDetailAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
