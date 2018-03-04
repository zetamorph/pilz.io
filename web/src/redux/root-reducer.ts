import { combineReducers } from 'redux';
import { mushroomReducer } from './modules/mushroom';

export const rootReducer = combineReducers({
    mushrooms: mushroomReducer,
});