import { GET_LIST_TICKET } from "../constants/booking.constant";
const initialState = {
  chairList: [],
};
const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_TICKET:
      return { ...state, chairList: payload.danhSachGhe };
    case "CHOICE_CHAIR": {
      const index = state.chairList.findIndex(
        (chair) => chair.maGhe === payload
      );
      if (index !== -1) {
        let currentChair = state.chairList[index];
        let newChair = { ...currentChair, dangChon: !currentChair.dangChon };
        state.chairList[index] = newChair;
        return { ...state };
      }
    }
    default:
      return state;
  }
};

export default bookingReducer;
