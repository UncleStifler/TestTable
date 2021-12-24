import {usersAPI} from "../api/users-api";

const initialState = {
    dataBase: []
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, dataBase: action.arrayUsers}
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
