import types from "./types"

const storeData = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.GET_DATA, payload: data })
        } catch (error) {

        }
    }
}

const authData = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.LOGIN, payload: data })
        } catch (error) {

        }
    }
}

export default {
    storeData,
    authData
}