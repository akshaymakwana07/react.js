

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import {thunk} from 'redux-thunk';
import rootReducer from './rootReducer'; // Ensure this path is correct

const logger = createLogger();
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
