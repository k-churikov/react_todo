import React, { useState, useEffect } from 'react';
// import TodoAdd from './Todo/TodoAdd';
import TodoList from './Todo/TodoList';
import Context from './context'
import Loader from './Loader'
import  './Todo/Todo.css'

const TodoAdd = React.lazy(() => import('./Todo/TodoAdd.js'))

function App() {
  let [todos, setTodos] = useState([])
  let [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=100')
      .then(response => response.json())
      .then(json => {
        setTodos(json)
        setLoading(false)
      })
  }, [])

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    }))
  }

  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id))

  const addTodo = title => {
    const newTodo = {
      id: new Date(),
      conmleted: false,
      title
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <React.Suspense fallback={<p>Loading...</p>}>
          <TodoAdd onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length 
          ? <TodoList todos={todos} onToggle={toggleTodo} /> 
          : loading ? null : <p>No Todos...</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
