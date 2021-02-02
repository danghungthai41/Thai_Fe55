import { getMovieDetailAPI } from "../../redux/actions/movie.action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import format from "date-format";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
function Detail() {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const { lichChieu } = movieDetail;
  const { movieCode } = useParams();
  //   console.log("params : ", params);
  useEffect(() => {
    dispatch(getMovieDetailAPI(movieCode));
  }, []);

  function renderLichChieu() {
    return lichChieu?.map(
      (
        { tenPhim, giaVe, ngayChieuGioChieu, thoiLuong, maLichChieu },
        index
      ) => (
        <TableRow>
          <TableCell align="center">{tenPhim}</TableCell>
          <TableCell align="center">{giaVe}</TableCell>
          <TableCell align="center">
            {format("dd-MM-yyyy | hh:mm", new Date(ngayChieuGioChieu))}
          </TableCell>
          <TableCell align="center">{thoiLuong}</TableCell>
          <TableCell align="center">
            <Button variant="contained" color="secondary">
              <NavLink to={`/booking/${maLichChieu}`}>Booking</NavLink>
            </Button>
          </TableCell>
        </TableRow>
      )
    );
  }

  return (
    <div style={{ height: "300vh" }}>
      <img src={movieDetail.hinhAnh} alt="" />
      <h2>Show Lich Chieu</h2>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Tên Phim</TableCell>
                <TableCell align="center">Gia Ve</TableCell>
                <TableCell align="center">ngày chiếu giờ chiếu</TableCell>
                <TableCell align="center">thời lượng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> {renderLichChieu()} </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Detail;
