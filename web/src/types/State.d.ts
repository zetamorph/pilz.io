import { Mushroom } from './';

export interface State {
    mushrooms: { [id: string]: Mushroom };
}