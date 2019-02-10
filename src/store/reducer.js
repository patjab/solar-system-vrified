const initialState = {
    isInArea: false,
    currentRoom: null,
    rtc: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_IN_AREA':
            return {
                ...state,
                isInArea: action.payload
            }
        case 'SET_CURRENT_ROOM':
            return {
                ...state,
                currentRoom: action.payload
            }
        default:
            return state;
    }

} 