import { logInSuccess, logInFailed, logOutUser } from './actions';
import { LogInUser } from './../../api/authApi';

export const logIntoApp = (requestParams) => {
    return dispatch => {
        console.log(requestParams)
        return LogInUser(requestParams)
            .then(res => {
                console.log(res)
                dispatch(logInSuccess(res.data))
                return res.data;
            })
            .catch(err => {
                console.log("ERR",err)
                dispatch(logInFailed(err.message));
                return err.message;
            })
    }
}