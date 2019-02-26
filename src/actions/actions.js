import { SEND } from 'redux-websocket-bridge';

export const toggleIsInArea = (isInArea) => ({ 
    type: 'TOGGLE_IS_IN_AREA', 
    payload: isInArea
});

export const setCurrentRoom = (currentRoom) => ({ 
    type: 'SET_CURRENT_ROOM', 
    payload: currentRoom 
});

export const addPlanet = (planet) => ({
    type: 'ADD_PLANET', 
    payload: planet
});

export const sendOffer = (offer) => ({ 
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'offer',
        data: offer
    })
});

export const sendAnswer = (answer) => ({
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'answer',
        data: answer
    })
});

export const onJoin = (roomName) => {
    return {
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'join',
        data: {
            roomName
        }
    })
}};