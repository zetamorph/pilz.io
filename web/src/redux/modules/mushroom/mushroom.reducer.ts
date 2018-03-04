import { mushroomActions } from './actions';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Mushroom } from 'types';

const {
    fetchMushrooms,
    createMushroom,
} = mushroomActions;

const INITIAL_STATE: { [id: string]: Mushroom } = {};

export const mushroomReducer = reducerWithInitialState(INITIAL_STATE)
    .case(fetchMushrooms.started, (state) => {
        return state;
    })
    .case(fetchMushrooms.failed, (state) => {
        return state;
    })
    .case(fetchMushrooms.done, (state, payload) => {
        let mushrooms = {};
        payload.result.forEach((mushroom: Mushroom) => {
            mushrooms[mushroom.id] = mushroom;
        });
        return mushrooms;
    })
    .case(createMushroom.started, (state, payload) => {
        return state;
    });
