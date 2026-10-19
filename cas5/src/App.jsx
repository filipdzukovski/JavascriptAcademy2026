import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [car, setCar] = useState({ model: 'Yugo', year: 2010 });
  const [days, setDays] = useState(["Monday", 'Tuesday', 'Wednesday']);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Eat Dinner', done: false },
    { id: 3, text: 'Go to Sleep', done: false },
  ])


  useEffect(() => {
    console.log(person)
  }, [person])

  function newCar() {
    setCar({
      // model: 'Yugo',
      ...car,
      year: 2016
    })
  }

  function addDays() {
    setDays(['Sunday', ...days, 'Thursday'])
  }

  function addNewTodo() {

    let newObject = {
      id: todos.length + 1,
      text: newTodo,
      done: false
    }
    // newTodo -- string
    setTodos([...todos, newObject]);
    setNewTodo('');
  }

  function markTodoAsDone(todo) {
    setTodos([...todos.map(item => (item.id === todo.id) ? //go baram kliknatiot element po id
      { ...item, done: !item.done } // koga ke go najdam kliknatiot element gi kopiram so spread props na toj objekt i menuvam samo done so negacija
      : item //za site ostanati ne gi cepkaj
    )]);
  }

  return (
    <div id='app'>

      <input
        type="text"
        placeholder='Enter TODO'
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addNewTodo}>Add Todo</button>

      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy New Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
      <hr />
      <input
        type="text"
        placeholder='Enter First Name'
        value={person.firstName}
        onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
      />
      <br />
      <br />
      <input
        type='text'
        placeholder='Enter Last Name'
        value={person.lastName}
        onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
      />
    </div>
  )
}