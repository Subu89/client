const initialState = [];

const reviewReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'GET_REVIEWS':
            return [...action.payload];
        case 'ADD_REVIEWS':
            return state.concat(action.payload);
        default:
            return [...state];
    }
}

export default reviewReducer;