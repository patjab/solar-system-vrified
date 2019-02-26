import initialState from '../initialState';

export default function initialHandshakeReducer(state = initialState.initialHandshake, action) {
    switch (action.type) {
        case 'SERVER/INITIAL':
            return action.payload.expectedData;
        default:
            return state;
    }
} 