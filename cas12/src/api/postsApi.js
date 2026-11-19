import axios from 'axios';
import {api} from './../config/properties';

export const getPosts = async (token) =>{
    const header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
    try{
        const result = await axios.get(`${api.localRoute}/posts`,{headers:header});
        return await Promise.resolve(result);
    }
    catch(err){
        return await Promise.reject(err)
    }
}