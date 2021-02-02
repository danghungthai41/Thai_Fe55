import React, { Component, Fragment, useEffect } from "react";
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import axios from "axios";
import {useDispatch} from "react-redux";
const Game = () => {
  // useEffect đại diện cho : DidMount, DidUpdate, WillUnmount
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({type: "FETCH_DECK_CARD", payload: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      <Controls />
      <Main />
    </Fragment>
  );
};

export default Game;
