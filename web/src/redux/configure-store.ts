import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware(rootEpic);

export function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(epicMiddleware),
    );
}