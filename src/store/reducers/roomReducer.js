import initialState from '../initialState';

export default function roomReducer(state = initialState.currentRoom, action) {
    switch (action.type) {
        case 'SET_CURRENT_ROOM':
            return action.payload;
        default:
            return state;
    }
} 