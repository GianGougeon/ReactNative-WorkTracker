import { SET_SELECTED_DETAIL } from '../actions/detailsActions';

const initialState = {
    selectedDetail: null
};

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_DETAIL:
            return {
                ...state,
                selectedDetail: action.payload
            };
        default:
            return state;
    }
};

export default detailsReducer;