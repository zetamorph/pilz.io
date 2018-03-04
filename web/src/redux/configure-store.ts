import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootEpic } from './root-epic';
import { rootReducer } from './root-reducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

export function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(epicMiddleware),
        )
    );
}