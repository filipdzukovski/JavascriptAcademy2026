import React,{useState,useEffect} from 'react';
import {api} from './../config/properties';
import axios from 'axios';
import {useParams} from 'react-router-dom';


export const PostComments = () => {

    const [postComments,setPostComments] = useState([]);

    let {postId} = useParams();

    useEffect(()=>{
        axios.get(`${api}/comments?postId=${postId}`)
            .then(res=>setPostComments(res.data))
            .catch(err=>alert(err.message))
    },[])

    return (
        <div id='post-comments'>
          {postComments.map(comm=>{
            return(
                <div key ={comm.id}>
                    <h1>Comment: {comm.name}</h1>
                    <h2>Email: {comm.email}</h2>
                    <p>Body : {comm.body}</p>
                    <hr/>
                </div>
            )
          })}
        </div>
    )
}