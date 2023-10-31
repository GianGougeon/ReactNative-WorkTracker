import { ADD_ITEM, UPDATE_ITEM } from "../Actions/types";
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
        default:
            return state;
    }
};

export default itemReducer;
