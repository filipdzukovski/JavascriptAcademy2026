import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {api} from './../config/properties';

export const Todos = () => {

    const [todos, setTodos] = useState([]);

    function getTodos() {
        axios.get(`${api}/todos`)
            .then(result => setTodos(result.data))
            .catch(err => alert(err))
    }

    useEffect(() => {
        getTodos();
    }, [])

    function markDone(id) {
        setTodos([...todos.map(item => item.id === id ?
             { ...item, completed: !item.completed } : item)])
    }

    return (
        <div id='todos'>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.title}
                            <input
                                type='checkbox'
                                value={todo.completed}
                                checked={todo.completed}
                                onChange={() => { markDone(todo.id) }}
                            />
                        </p>

                    </div>
                )
            })}
        </div>
    )
}