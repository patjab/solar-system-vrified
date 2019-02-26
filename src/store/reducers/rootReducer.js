import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import roomReducer from './roomReducer';
import planetsReducer from './planetsReducer';
import serverConnectivityReducer from './serverConnectivityReducer';

const reducers = combineReducers({
    isInArea: locationReducer, 
    currentRoom: roomReducer,
    planets: planetsReducer,
    serverConnectivity: serverConnectivityReducer
});

export default reducers;