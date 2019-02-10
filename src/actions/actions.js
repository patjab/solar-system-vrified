export const toggleIsInArea = (isInArea) => {
    return { type: 'TOGGLE_IS_IN_AREA', payload: isInArea };
}

export const setCurrentRoom = (currentRoom) => {
    return { type: 'SET_CURRENT_ROOM', payload: currentRoom };
}
