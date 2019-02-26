import initialState from '../initialState';

export default function planetsReducer(state = initialState.planets, action) {
    switch (action.type) {
        case 'ADD_PLANET':
            const newPlanet = {
                ...action.payload
            };
            return [...state, newPlanet];
        default:
            return state;
    }
} 