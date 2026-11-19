import axios from 'axios';
import {api} from './../config/properties';

export const getUsers = async () => {
    try{
        const result = await axios.get(`${api.root}/users`) 
        return await Promise.resolve(result);
    }
    catch(err){
        return await Promise.reject(err);
    }
}

export const deleteUsers = async (userId) =>{
    console.log("USERID:::",userId);
    try{
        const result = await axios.delete(`${api.root}/users/${userId}`)
        console.log("RESULT:::",result) // {} 204 No Content
        return await Promise.resolve(userId);
    }
    catch(err){
        return await Promise.reject(err)
    }
}