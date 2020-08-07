import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import productsReducer from './reducers/products';
import userReducer from './reducers/user';
import overlaysReducer from './reducers/overlays';
import errorReducer from './reducers/errors';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const rootReducer = combineReducers({
    error: errorReducer,
    products: productsReducer,
    user: userReducer,
    overlays: overlaysReducer,
});

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware, 
            logger
        )
    )
);

store.subscribe(throttle(() => {
    saveState({
        user: store.getState().user,
        overlays: store.getState().overlays,
        error: store.getState().error
    });
}, 1000));

export default store;