import { SIGN_IN } from "../constants/user.constant";
import axios from "axios";
const signInAction = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const signInApi = (user, history) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    })
      .then((res) => {
        console.log(res);
        dispatch(signInAction(res.data));
        // lưu xuống localstorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // chuyen trang
        // history.push("/");
        // chuyển lại trang trước đó
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
