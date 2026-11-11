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