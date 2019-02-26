import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import roomReducer from './roomReducer';
import planetsReducer from './planetsReducer';
import connectionReducer from './connectionReducer';

const reducers = combineReducers({
    isInArea: locationReducer, 
    currentRoom: roomReducer,
    planets: planetsReducer,
    signalingConnection: connectionReducer
});

export default reducers;