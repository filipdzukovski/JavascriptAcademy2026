import React from 'react';

export const Todos = ({ listOfTodos, deleteTodo, markTodoAsDone, editTodo, handleEdit,handleCancel,handleSave }) => { //Cekor 2. definiram komponenta za prikaz so props listOfTodos

    return (
        <div>
            {listOfTodos.length > 0 ?
                //   Cekor 4 definiram tabela za prikaz na elementi
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Cekor 4.1 mapiram vo tbody elemenite od array-ot */}
                        {listOfTodos.map(todo => {
                            return (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{editTodo && editTodo.id === todo.id ?
                                        <input
                                            type="text"
                                            value={editTodo.text}
                                            onChange={(e)=>{handleEdit(editTodo.id,e.target.value)}}
                                        />
                                        :
                                        todo.text

                                    }</td>
                                    <td>
                                        <input
                                            type={"checkbox"}
                                            value={todo.completed}
                                            checked={todo.completed}
                                            onChange={() => { markTodoAsDone(todo) }}
                                        >
                                        </input>
                                    </td>
                                    <td>
                                        {editTodo && editTodo.id === todo.id ?
                                            <>
                                                <button onClick={handleSave}>Save</button>
                                                <button onClick={handleCancel}>Cancel</button>
                                            </>
                                            :
                                            <>
                                                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                            </>}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : <h2>No items added in array yet!!!</h2>}
        </div>
    )
}