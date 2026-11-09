import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchCommentsRequest} from './../actions/CommentsActions';


export const Comments = () => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.CommentsReducer.comments)  
    const error =useSelector(state=>state.CommentsReducer.error);

    useEffect(()=>{
       dispatch(fetchCommentsRequest()) 
    },[])

    return(
        <div id='comments'>
            <h2>Comments: {comments.length}</h2>
            {error && <h1>{error}</h1>}
        </div>
    )
}