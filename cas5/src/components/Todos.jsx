import React from 'react';

export const Todos = ({listOfTodos,markTodoAsDone}) => {
    console.log(listOfTodos)
    return(
        <ol>
            {listOfTodos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input type="checkbox" 
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{markTodoAsDone(todo)}}
                        />
                    </li>
                )
            })}
        </ol>
    )
}