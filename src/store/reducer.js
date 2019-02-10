const initialState = {
    isInArea: false,
    rtc: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_IN_AREA':
            return {
                ...state,
                isInArea: action.payload
            }
        case '':
            return 
        default:
            return state;
    }

} 