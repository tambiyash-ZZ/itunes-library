import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

export interface IStore {
    id: string;
    bgImage: string;
    name: string;
}

const middleware = [thunk];
// Enhancer used to include REDUX Dev Tools Chrome Extension to fetch store state.
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
