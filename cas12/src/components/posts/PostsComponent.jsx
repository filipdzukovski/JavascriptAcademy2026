import React from 'react';

export const PostsComponent = ({posts,errorMessage}) => {

    return (
        <div id='posts-component'>
            <h2>Posts Component: {posts.length}</h2>
        </div>
    )
}