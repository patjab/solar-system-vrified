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

export const sendOffer = (offer, roomName) => ({ 
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'offer',
        data: {
            roomName,
            offer
        }
    })
});

export const sendAnswer = (answer, roomName) => ({
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'answer',
        data: {
            roomName,
            answer
        }
    })
});

export const sendCandidate = (candidate, roomName) => ({
    type: `@@websocket/${ SEND }`, 
    payload: JSON.stringify({
        type: 'candidate',
        data: {
            roomName,
            candidate
        }
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