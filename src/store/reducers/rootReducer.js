import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import roomReducer from './roomReducer';
import planetsReducer from './planetsReducer';
import serverConnectivityReducer from './serverConnectivityReducer';
import offerReducer from './offerReducer';
import answerReducer from './answerReducer';
import candidateReducer from './candidateReducer';

const reducers = combineReducers({
    isInArea: locationReducer, 
    currentRoom: roomReducer,
    planets: planetsReducer,
    serverConnectivity: serverConnectivityReducer,
    offer: offerReducer,
    answer: answerReducer,
    candidate: candidateReducer
});

export default reducers;