import { combineEpics } from 'redux-observable';
import { mushroomEpic } from './modules/mushroom';

export const rootEpic = combineEpics(
    mushroomEpic,
);