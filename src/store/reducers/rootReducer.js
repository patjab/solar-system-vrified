import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import roomReducer from './roomReducer';
import planetsReducer from './planetsReducer';
import serverConnectivityReducer from './serverConnectivityReducer';
import initialHandshakeReducer from './initialHandshakeReducer';

const reducers = combineReducers({
    isInArea: locationReducer, 
    currentRoom: roomReducer,
    planets: planetsReducer,
    serverConnectivity: serverConnectivityReducer,
    initialHandshake: initialHandshakeReducer
});

export default reducers;