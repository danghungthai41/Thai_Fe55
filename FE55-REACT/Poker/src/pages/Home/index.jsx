import React, { useState, useCallback } from "react";
import Game from "../Game";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
// import useStyle from "./style";
/* demo useMemo
const sum = useMemo (()=>{
  return a*b;
}, [])
*/
const userSchema = yup.object().shape({
  username: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .email("Email is invalid"),
  ph: yup
    .string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Your phone have to contain numbers"),
});

/*
TODOLIST
1. Xử lý form, lấy info người dùng nhập
2. dispatch action, push user into playerLisst,
3. Hiện màn hình game, ẩn form

CÁC THƯ VIỆN FORM: formik, redux-form,...
validation: yup, joi, validators,...
*/
const Home = () => {
  //useStyle là hàm tự định nghĩa để chỉnh css
  // const classes = useStyle();
  const [isStarted, setIsStarted] = useState(false);
  const dispatch = useDispatch();

  const {
    handleChange,
    values,
    errors,
    isValid,
    handleBlur,
    touched,
    setFieldTouched,
    setValues,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      totalPoint: 25000,
      cards: [],
    },
    validationSchema: userSchema,
    validationOnMount: true
  });
  const handleSetDefaultPlayer = useCallback(() => {
    const defaultPlayer = {
      username: "danghungthai41",
      email: "danghungthai@gmail.com",
      phone: "123123341",
      totalPoint: 25000,
      cards: [],
    };
    setValues(defaultPlayer);
  }, [setValues]);

  const setAllTouched = useCallback(() => {
    const fields = ["username", "email", "phone"];
    fields.forEach((field) => {
      // console.log(field);
      setFieldTouched(field, true);
    });
  }, [setFieldTouched]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //check form invalid
      console.log("testttt",isValid,errors);
      if (!isValid) {
        setAllTouched();
        return;
      }
      // console.log(touched);
      // console.log(values);
      dispatch({
        type: "ADD_PLAYER",
        payload: values,
      });
      setIsStarted(true);
      // dispatch(createAction(values));
    },
    [values, isValid, dispatch, setAllTouched]
  );

  return (
    <>
      {isStarted ? (
        <Game />
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
          <h3>Fill your info and start</h3>
          <form className="w-25 mx-auto" onSubmit={handleSubmit}>
            <input
              type="input"
              placeholder="username"
              name="username"
              onChange={handleChange}
              className="w-100 form-control mb-3"
              onBlur={handleBlur}
              value={values.username}
            />
            {touched.username && errors.username && (
              <p className="text-danger">{errors.username}</p>
            )}
            <input
              type="input"
              placeholder="email"
              name="email"
              onChange={handleChange}
              className="w-100 form-control mb-3"
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className="text-danger">{errors.email}</p>
            )}
            <input
              type="input"
              placeholder="phone"
              name="phone"
              onChange={handleChange}
              className="w-100 form-control mb-3"
              onBlur={handleBlur}
              value={values.phone}
            />
            {touched.phone && errors.phone && (
              <p className="text-danger">{errors.phone}</p>
            )}
            {/* disabled={!isValid} */}
            <button className="btn btn-success w-100 mb-2">
              Start new Game
            </button>
          </form>
          <button
            onClick={handleSetDefaultPlayer}
            className="btn btn-primary w-25"
          >
            Set default player
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
