import { Mushroom } from '../../../types';
import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory('MUSHROOM');

export const mushroomActions = {
    fetchMushrooms: actionCreator.async<undefined, Mushroom[], string>('FETCH_ALL'),
    createMushroom: actionCreator.async<FormData, undefined, string>('CREATE'),
    fetchMushroomById: actionCreator<number>('FETCH_BY_ID'),
};