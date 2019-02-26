import initialState from '../initialState';

export default function locationReducer(state = initialState.isInArea, action) {
    switch (action.type) {
        case 'TOGGLE_IS_IN_AREA':
            return action.payload;
        default:
            return state;
    }
} 