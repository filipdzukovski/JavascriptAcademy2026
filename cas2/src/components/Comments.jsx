import React from 'react';

export const Comments = ({hasComments,longComment}) => {
    console.log(hasComments)
    return (
        <div id='comments'>
            {hasComments ? <h2>Comments</h2> : <p>No comments here !!!</p>}

                
            {longComment && <p>Has long comment</p>}
           

        </div>
    )
}
 

//Logicko I (&&)
// T i T = T
// T i NT = NT
// NT i T = NT
// NT i NT = NT 

//if(uslov){izvrsi ova}
//else{izvrsi nesto drugo}
// uslov ? izvrsi ako e tocno : izvrsi ako e netocno -- ternaren operator