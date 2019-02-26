import initialState from '../initialState';

export default function connectionReducer(state = initialState.signalingConnection, action) {
    switch (action.type) {
        case 'SET_CONNECTION':
            return new WebSocket('ws://localhost:9090');
        default:
            return state;
    }
} 