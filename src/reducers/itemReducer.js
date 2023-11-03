import { ADD_ITEM, UPDATE_ITEM, SET_SELECTED_DETAIL } from "../actions/types";
// import json from "../data/data.json";
import json from "../data/workTrackerData.json";

const initialState = {
    items: json,
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        case SET_SELECTED_DETAIL:
            return {
                ...state,
                selectedDetail: action.payload,
            };
        default:
            return state;
    }
};

export default itemReducer;
