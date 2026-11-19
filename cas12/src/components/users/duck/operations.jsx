import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail,
    removeUsersRequest,
    removeUsersSuccess,
    removeUsersFail
} from './actions';
import { getUsers,deleteUsers } from './../../../api/usersApi';

export const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result => {
                dispatch(fetchUsersSuccess(result.data))
                return result.data;
            })
            .catch(err => {
                dispatch(fetchUsersFail(err.message))
                return err.message;
            })
    }
}

export const removeUsers = (requestParams) =>{
    console.log("OPERATIONS:::",requestParams)
    return dispatch =>{
        dispatch(removeUsersRequest(requestParams))
        return deleteUsers(requestParams)
            .then(result=>{
                console.log("RESULT:::",result)
                dispatch(removeUsersSuccess(requestParams))
                return result.data;
            })
            .catch(err=>{
                dispatch(removeUsersFail(err.message));
                return err.message;
            })
    }
}