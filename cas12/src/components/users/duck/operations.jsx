import {fetchUsersRequest,fetchUsersSuccess,fetchUsersFail} from './actions';
import {getUsers} from './../../../api/usersApi';

export const fetchUsers = (requestParams) =>{
    return dispatch =>{
        dispatch(fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result=>{
                dispatch(fetchUsersSuccess(result.data))
                return result.data;
            })
            .catch(err=>{
                dispatch(fetchUsersFail(err.message))
                return err.message;
            })
    }
}