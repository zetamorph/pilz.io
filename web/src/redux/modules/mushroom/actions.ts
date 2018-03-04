import { Mushroom } from '../../../types';

export const FETCH_MUSHROOMS = 'FETCH_MUSHROOMS';
export const fetchMushrooms = () => ({ type: FETCH_MUSHROOMS });

export const FETCH_MUSHROOMS_DONE = 'FETCH_MUSHROOMS_DONE';
export const fetchMushroomsDone = (payload: Mushroom[]) => ({ type: FETCH_MUSHROOMS_DONE, payload });

export const FETCH_MUSHROOMS_FAILED = 'FETCH_MUSHROOMS_FAILED';
export const fetchMushroomsFailed = (payload: Error) => ({ type: FETCH_MUSHROOMS_FAILED, payload });