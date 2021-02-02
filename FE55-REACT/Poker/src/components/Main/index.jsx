import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Player from "../Player";
import axios from "axios";
const MainComponent = () => {
  const deckCard = useSelector((state) => state.card.deckCard);
  const dispatch = useDispatch();
  const playerList = useSelector((state) => state.player.playerList);
  const drawCards = async () => {
    /*
    1. Call api lấy 12 lá bài
    2. dispatch action to player reducer , draw 3 card per each player
    */
    const res = await axios({
      url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`,
      method: "GET",
    });
    dispatch({ type: "DRAW_CARD", payload: res.data.cards });
  };
  return (
    <div
      style={{ position: "relative", height: "600px" }}
      className="container"
    >
      {/* <button onClick={handleChangeState}>Change State</button> */}
      {playerList.map((player, index) => (
        <Player index={index + 1} player={player} key={player.username} />
      ))}

      <img
        onClick={drawCards}
        alt="main"
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        src="https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
      />
    </div>
  );
};
export default MainComponent;
