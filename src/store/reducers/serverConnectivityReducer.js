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
        console.log('received message');
        console.log(action);
        break;
    
    default: 
        break;
  }
 
  return state;
}