import initialState from '../initialState';

export default function offerReducer(state = initialState.offer, action) {
    switch (action.type) {
        case 'SERVER/GETOFFER':
            return action.payload.offer;
        default:
            return state;
    }
} 