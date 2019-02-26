import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import roomReducer from './roomReducer';

const reducers = combineReducers({
    isInArea: locationReducer, 
    currentRoom: roomReducer
});

export default reducers;