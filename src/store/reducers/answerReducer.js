import initialState from '../initialState';

export default function answerReducer(state = initialState.answer, action) {
    switch (action.type) {
        case 'SERVER/GETANSWER':
            return action.payload.answer;
        default:
            return state;
    }
} 