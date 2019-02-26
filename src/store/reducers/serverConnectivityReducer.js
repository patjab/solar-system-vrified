import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import initialState from '../initialState';
 
export default function serverConnectivityReducer(state = initialState.serverConnectivity, action) {
  switch (action.type) {
    case `@@websocket/${ OPEN }`:
        return { ...state, connected: true };    
    case `@@websocket/${ CLOSE }`:
        return { ...state, connected: false };    
    // case `@@websocket/${ MESSAGE }`:
    //     console.log('received message');
    //     console.log(action);
    //     break;
    default: 
        break;
  }
 
  return state;
}