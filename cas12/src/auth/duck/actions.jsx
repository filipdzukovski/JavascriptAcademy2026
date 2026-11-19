import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT_USER} from './constants';

export const logInSuccess = (loginData) => {
    console.log(loginData)
    return{
        type: LOGIN_SUCCESS,
        payload: loginData
    }
}

export const logInFailed = (error) => {
    return{
        type:LOGIN_FAILED,
        payload: error
    }
}

export const logOutUser = () => {
    return{
        type:LOGOUT_USER,
        payload: "Logged Out"
    }
}