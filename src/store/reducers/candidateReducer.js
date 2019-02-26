import initialState from '../initialState';

export default function candidateReducer(state = initialState.candidate, action) {
    switch (action.type) {
        case 'SERVER/GETCANDIDATE':
            return action.payload.candidate;
        default:
            return state;
    }
} 