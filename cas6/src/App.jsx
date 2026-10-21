import React, { useState } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [todos, setTodos] = useState([]); //cekor 1 - definiram prazen array sto ke gi cuva elementite od nizata todos
  const [newTodo, setNewTodo] = useState(''); //cekor 6 definiram vrednost vo state za noviot input
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);


  //cekor 8 definiram add f-ja
  function addNewTodo() {

    if (newTodo.trim() !== '') { //cekor 8.4 proverka dali e prazen elementot

      //Cekor 8.1 moram da napravam nov objekt sto ke go dodadam vo array
      const novElement = {
        id: Math.floor(Math.random() * 1000), //definiram random id
        text: newTodo,
        completed: false
      }

      setTodos([...todos, novElement]); //Cekor 8.2 dodavam vo array cel element
      setNewTodo(''); //Cekor 8.3 cistam input field
    } else {
      alert("No value has been entered\nPlease enter a valid task before adding it to your list")
    }
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id != todoId))
    // setTodos([...todos.filter(todo=> todo.id !=todoId)])
  }

  function markTodoAsDone(todo) {
    setTodos([...todos.map(item => 
      item.id === todo.id ?
       { ...item, completed:!item.completed }
      : item
    )])
  }

  const completedElements = todos.filter(todo => todo.completed).length

  return (
    <div id='app'>

      {/* Cekor 5  Definiram input za vnes na novo todo*/}
      <input
        type="text"
        placeholder='Enter New TODO'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      {/*Cekor 7 definiram button za add  */}
      <button onClick={addNewTodo}>Add Todo</button>
    <br/>
    <br/>
    <br/>
      {todos.length >0 && <h3>Number of completed Items: {completedElements}</h3>}
    
    <button onClick={() => setShowCompletedTodos(!showCompletedTodos)}>
            {showCompletedTodos ? "Hide Completed" : "Show Completed"}
    </button>
      {/* Cekor 3 pravam import i povikuvam vo HTML child componenta Todos so props todos */}
      <Todos
        listOfTodos={showCompletedTodos ? todos : todos.filter((todo) => !todo.completed)}
        deleteTodo={deleteTodo}
        markTodoAsDone={markTodoAsDone}
      />
    </div>
  )
}