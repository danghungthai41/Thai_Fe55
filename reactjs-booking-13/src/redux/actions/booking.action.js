import axios from "axios";
import { GET_LIST_TICKET } from "../constants/booking.constant";
const getTicketListAction = (ticketList) => {
  return {
    type: GET_LIST_TICKET,
    payload: ticketList,
  };
};
export const getTicketListAPI = (code) => {
  return async (dispatch) => {
    //   c1 - promise
    // axios({
    //   method: "GET",
    //   url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099`,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     dispatch(getTicketListAction(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //   c2 - async / await
    try {
      const res = await axios({
        method: "GET",
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${code}`,
      });
      dispatch(getTicketListAction(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const bookingTicketAPI = (maLichChieu, danhSachVe) => {
  return async (dispatch) => {
    try {
      const user = JSON.parse(localStorage.getItem("userLogin"));
      const res = await axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      alert("Mua Thàng Công rồi");
    } catch (error) {
      console.log(error);
    }
  };
};
