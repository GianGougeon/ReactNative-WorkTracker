import { ADD_ITEM, UPDATE_ITEM } from "./types";

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});
export const updateItem = (updatedItem) => ({
    type: UPDATE_ITEM,
    payload: updatedItem,
});
