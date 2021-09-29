import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context'

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)

  const clases = ['todo-list__item']

  if (todo.completed) {
    clases.push('todo-list__done')
  } 

  return (
    <li className={clases.join(' ')} key={todo.id}>
      <label className="todo-list__label">
        <div className="todo-list__index">{index + 1}</div> 
        <input className="todo-list__checkbox" type="checkbox" 
          checked={todo.completed} onChange={() => onChange(todo.id)} />
        <div className="todo-list__title">{todo.title}</div>
      </label>
      <button className="todo-list__btn" onClick={removeTodo.bind(null, todo.id)}>Удалить</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TodoItem