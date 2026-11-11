import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsersComponent } from './UsersComponent';
import { fetchUsers } from './duck/operations';


export default function UsersContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const message = useSelector(state => state.usersReducer.message);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div id='users-container'>
            <UsersComponent listOfUsers={users} errorMessage={message} />
        </div>
    )
}