import { combineEpics } from 'redux-observable';
import { FETCH_MUSHROOMS } from './actions';
import { fetchMushroomsDone, fetchMushroomsFailed } from '.';
import { Mushroom } from '../../../types';

const fetchAllMushroomsEpic = action$ =>
    action$
    .ofType(FETCH_MUSHROOMS)
    .flatMap((action) => {
        return fetch('http://localhost:3001/mushrooms')
        .then(res => res.ok ? res.json() : fetchMushroomsFailed(new Error()))
        .then((mushrooms: Mushroom[]) => fetchMushroomsDone(mushrooms));
    });

export const mushroomEpic = combineEpics(
    fetchAllMushroomsEpic,
);