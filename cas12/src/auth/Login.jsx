import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const navigate = useNavigate();

    function logIn(){
        try{
            navigate('/users')
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <div id='login'>
            <label>Username:</label>
            <input
                type='text'
                placeholder='Enter Username'
                value={loginData.username}
                onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }}
            />
            <br />
            <br />
            <label>Password</label>
            <input
                type='text'
                placeholder='Enter Password'
                value={loginData.password}
                onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
            />
            <br />
            <br />
            <button onClick={logIn}>Login</button>

        </div>
    )
}