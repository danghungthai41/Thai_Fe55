let initialState = {
  playerList: [
    {
      username: "Player 1",
      email: "player1@gmail.com",
      phone: "1829839030",
      totalPoint: 25000,
      cards: [],
    },
    {
      username: "Player 2",
      email: "player2@gmail.com",
      phone: "8849839939",
      totalPoint: 25000,
      cards: [],
    },
    {
      username: "Player 3",
      email: "player3@gmail.com",
      phone: "894589485",
      totalPoint: 25000,
      cards: [],
    },
  ],
};

const checkSpecialCase = (cards) => {
  const specialCard = ["KING", "JACK", "QUEEN"];
  for (let card of cards) {
    if (!specialCard.includes(card.value)) {
      return false;
    }
  }
  return true;
};
const mapCardToPoint = (card) => {
  const specialCard = ["KING", "JACK", "QUEEN"];
  if (card.value === "ACE") return 1;
  if (specialCard.includes(card.value)) return 10;
  return +card.value;
};

// const calcPoint = (winners) => {

//   for(let player of )
//   winners.includes(state.playerList);
// }

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PLAYER":
      state.playerList = [...state.playerList, payload];
      return { ...state };
    case "DRAW_CARD":
      const totalPlayer = state.playerList.length;
      const clonePlayerList = [...state.playerList];
      for (let index in payload) {
        const playerIndex = index % totalPlayer;
        clonePlayerList[playerIndex].cards.push(payload[index]);
      }

      return { ...state, playerList: clonePlayerList };

    /*
        logic tinh diem
        1. check value
        2. tinh diem
          2.1. viết hàm chuyển đổi điểm
          2.2. cộng điểm 3 lá % 10
          2.3. Tìm max
          2.4 Cộng cho max, trừ điểm player còn lại
        */
    case "REVEAL_CARDS": {
      const specialCase = [];
      let max = 0;
      let maxPlayers = [];
      const clonePlayerList = [...state.playerList];
      for (let player of clonePlayerList) {
        if (checkSpecialCase(player.cards)) {
          specialCase.push(player);
        } else {
          //High order function: reduce, map, find, findIndex
          let totalPoint = player.cards.reduce((total, card) => {
            return total + mapCardToPoint(card);
          }, 0);


          totalPoint = totalPoint % 10;
          console.log("efjkbqewkgjfqe",totalPoint);

          if (totalPoint > max) {
            max = totalPoint;
            maxPlayers = [player];
          } else if (totalPoint === max) {
            maxPlayers.push(player);
          }
        }
      }

      const winners = specialCase.length ? specialCase : maxPlayers;
      const winPoint = 20000 / winners.length - 5000;
      for (let index in clonePlayerList) {
        const foundedIndex = winners.find(
          (winner) => winner.username === clonePlayerList[index].username
        );
        if (foundedIndex) {
          clonePlayerList[index].totalPoint += winPoint;
        } else {
          clonePlayerList[index].totalPoint -= 5000;
        }
      }
      return { ...state, playerList: clonePlayerList };
    }

    default:
      return state;
  }
};

export default reducer;

// const totalPlayer = state.playerList.length;
// const clonePlayerList = [...state.playerList];
// for (let index in payload) {

//   const playerIndex = index % totalPlayer;
//   clonePlayerList[playerIndex].cards.push(payload[index]);
// };
// return {...state, playerList : clonePlayerList };
