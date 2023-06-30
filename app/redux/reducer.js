import types from "./types";

const initialState = {
    data: [],
    login:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA:
            return {
                ...state,
                data: action.payload
            }
        case types.LOGIN:
            return {
                ...state,
                login:action.payload
            }
        default:
            return initialState
    }
}

export default reducer