import React from 'react';

export const Comments = ({ listOfComments, datum }) => {
    console.log(listOfComments)
    return (
        <div id='comments'>


            {listOfComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        {comment.author === 'Filip' ?
                            <p>Author: {comment.author}</p>
                            :
                            <p>Unkonwn Author</p>
                        }
                        <p style={{ color: comment.author === 'Simona' ? 'blue' : 'red' }}>
                            Content: {comment.content}</p>
                        <p>Datum:{datum}</p>
                        <hr />
                    </div>

                )
            })}


        </div>
    )
}