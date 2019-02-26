import initialState from '../initialState';
import { PlanetImages } from '../../config/PlanetImages';

export default function planetsReducer(state = initialState.planets, action) {
    switch (action.type) {
        case 'ADD_PLANET':
            const newPlanet = action.payload ? 
            {
                ...action.payload
            }
            :
            {
                color: PlanetImages[
                    Math.trunc(Math.random() * PlanetImages.length)
                ],
                radius: Math.random() * 5 + 2,
                startingPt: 0,
                timeOffset: Math.random() * 100
            }
            return [...state, newPlanet];
        default:
            return state;
    }
} 