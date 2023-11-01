import { SELECT_MONTH } from "../actions/monthActions";

const initialState = {
    selectedMonth: null,
};

const monthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MONTH:
            return {
                ...state,
                selectedMonth: action.payload,
            };
        default:
            return state;
    }
};

export default monthReducer;
