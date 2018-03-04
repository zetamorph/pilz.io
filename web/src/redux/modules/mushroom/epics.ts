import { combineEpics } from 'redux-observable';
import { mushroomActions } from './actions';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { Mushroom } from 'types';

const { createMushroom, fetchMushrooms } = mushroomActions;

const fetchMushroomsEpic: Epic<Action, any> = action$ =>
    action$
    .ofAction(fetchMushrooms.started)
    .flatMap((action) => {
        return fetch(`http://localhost:3001/mushrooms`)
        .then(async (res) => {
            if (!res.ok) {
                return fetchMushrooms.failed({ params: action.payload, error: 'error' });
            } else {
                const mushrooms: Mushroom[] = await res.json();
                return fetchMushrooms.done({ params: action.payload, result: mushrooms });
            }
        });
    });

const createMushroomEpic: Epic<Action, any> = action$ =>
    action$
    .ofAction(createMushroom.started)
    .flatMap((action) => {
        return fetch('http://localhost:3001/mushrooms', {
            method: 'POST',
            body: action.payload,
        })
        .then((res) => res.json())
        .then(() => createMushroom.done({ params: action.payload, result: undefined }));
    });

export const mushroomEpic = combineEpics(
    fetchMushroomsEpic,
    createMushroomEpic,
);