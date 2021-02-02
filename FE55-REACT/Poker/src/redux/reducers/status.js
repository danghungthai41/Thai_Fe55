let initialState = {
    isReveal : false,

}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "REVEAL_CARDS": 
        state.isReveal = true;
        return {...state};
        default:
            return state;
    }
}

// Thư viên redux toolkit giúp setup reducer, store;

export default reducer;