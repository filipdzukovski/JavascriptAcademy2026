import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsersComponent } from './UsersComponent';
import { fetchUsers, removeUsers } from './duck/operations';


export default function UsersContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const message = useSelector(state => state.usersReducer.message);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    function deleteUser(id) {
        console.log(id)
        dispatch(removeUsers(id));
    }

    return (
        <div id='users-container'>
            <UsersComponent listOfUsers={users} errorMessage={message} deleteUser={deleteUser} />
        </div>
    )
}