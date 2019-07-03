import { combineReducers } from 'redux';
import { musicListReducer } from '../containers/music-home';
import { musicDetailsReducer } from '../Containers/music-details';

/**
 * Root reducers containing combine reducer state from Music List and Details
 */

export default combineReducers({
    musicList: musicListReducer,
    musicDetails: musicDetailsReducer,
});