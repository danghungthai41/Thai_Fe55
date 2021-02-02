import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const Control = () => {
  const player = useSelector((state) => state.player.playerList);
  const deckCard = useSelector((state) => state.card.deckCard);
  const dispatch = useDispatch();
  const revealCards = () => {
    dispatch({type : "REVEAL_CARDS"});

  };
  const drawCards = async () => {
    /*
    1. Call api lấy 12 lá bài
    2. dispatch action to player reducer , draw 3 card per each player
    */
   
   const res = await axios({
     url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`,
     method: "GET",
   })
   dispatch({type: "DRAW_CARD", payload: res.data.cards});
   
  };
  console.log(player);
  return (
    <div className="d-flex  justify-content-end container">
      <div className="border d-flex justify-content-center align-items-center px-2">
        <button className="btn btn-success mr-2">Shuffle</button>
        <button onClick={drawCards} className="btn btn-info mr-2">
          Draw
        </button>
        <button onClick = {revealCards} className="btn btn-primary mr-2">Reveal</button>
      </div>
      <div className="d-flex">
        {player.map((item) => (
          <div className="border px-3 text-center" key={item.code}>
            <p>{item.username}</p>
            <p className="text-danger lead">
              {item.totalPoint.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Control;
