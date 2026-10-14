import React,{useState,useEffect} from 'react';
import { Input } from './Input';

export const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [inputType,setInputType] = useState('password');


    useEffect(()=>{
        console.log("Username: ",username);
        console.log("Password: ",password);
    },[username,password]) 
    //dependency array ako e prazen = componentDidMount
    //dependency array ako ne e prazen = componentDidUpdate na promena na navedenite vrednosti

    // function changeUsername(event){
    //     setUsername(event.target.value);
    // }

    //  function changePassword(event){
    //     setPassword(event.target.value);
    // }
    function changeButton(){
        setInputType(inputType === 'password' ? "text" : 'password')
    }

    function showValues(event){
        event.preventDefault();
        alert(`Username:${username}\nPassword:${password}`)
        
    }

    return (
        <div id='login'>
            <form onSubmit={showValues}>
                <Input
                    type={"text"}
                    placeholder={"Enter Username"} 
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    />
                <Input
                    type={inputType}
                    placeholder={"Enter Password"}
                    value={password} 
                    name={"password"}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    changeInputType={changeButton}
                   />
                <button className='action-button'>Sign In</button>
            </form>
        </div>
    )

}