import {usersAPI} from "../api/users-api";

const initialState = {
    data123: []
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, data123: action.arrayUsers}
        }
        default:
            return state
    }
}


export const usersReducerAC = (arrayUsers) => ({type: 'SET-USERS', arrayUsers})

export const setUsersTC = () => {
    return (dispatch) => {
        usersAPI.getUsers()
            .then(res => {
                dispatch(usersReducerAC(res.data))
            })
    }
}
