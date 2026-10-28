import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from './../config/properties';
import {useParams} from 'react-router-dom'; 

export const CommentDetails = () => {

    const [details, setDetails] = useState({});

    let {commentId} = useParams();

    useEffect(() => {
        axios.get(`${api}/comments/${commentId}`)
            .then(res => setDetails(res.data))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div id='comment-details'>
            <h2>Comment Details</h2>
            <h3>{details.name}</h3>
            <p>{details.email}</p>
            <p>{details.body}</p>
        </div>
    )
}