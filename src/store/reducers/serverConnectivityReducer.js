import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import initialState from '../initialState';
 
export default function serverConnectivityReducer(state = initialState.serverConnectivity, action) {
    console.log(action)

  switch (action.type) {
    case `@@websocket/${ OPEN }`:
        state = { ...state, connected: true };
        break;
    
    case `@@websocket/${ CLOSE }`:
        state = { ...state, connected: false };
        break;
    
    case `@@websocket/${ MESSAGE }`:
        // Process the raw message here, either string, ArrayBuffer, or Blob
        break;
    
    default: 
        break;
  }
 
  return state;
}