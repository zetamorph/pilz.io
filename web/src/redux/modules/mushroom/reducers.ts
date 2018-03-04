import { FETCH_MUSHROOMS_DONE, FETCH_MUSHROOMS_FAILED } from '.';

export const mushroomReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_MUSHROOMS_DONE:
            return action.payload;
        case FETCH_MUSHROOMS_FAILED:
            return state;
        default:
            return state;
    }
  };