import React, { useState, useEffect } from "react";

function Hook() {
  // state =============================================
  const resultState = useState(0);
  console.log(resultState); // [state,setSate]
  // c1
  // const state = resultState[0];
  // const setState = resultState[1];
  // c2
  const [state, setState] = resultState;
  // Effect - thường dùng để call api hoặc xử lý các tác dụng phục =============================================
  /**
   * chạy khi gọi component và cả khi update
   */
  useEffect(function () {
    console.log("run useEffect không tham số thứ 2");
    return function () {
      // clear tác dụng phụ
      console.log("clear");
    };
  });
  /**
   * chạy khi gọi component
   * thường call api lấy danh sách phim , chiết phim
   */
  useEffect(function () {
    console.log("run useEffect có tham số thứ 2 là mãng rỗng");
    return function () {
      // clear tác dụng phụ
    };
  }, []);
  /**
   * chạy khi giá trị trong mãng thay đỗi
   * thường call api để update rạp chiếu
   */
  const [name, setName] = useState("Ronaldo");
  useEffect(
    function () {
      console.log("run useEffect có tham số thứ 2 là mãng có giá trị");
    },
    [state, name]
  );
  return (
    <div>
      Hook
      <div className="demo-hook">
        <p>state : {state}</p>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          tăng 1
        </button>
      </div>
    </div>
  );
}

export default Hook;
