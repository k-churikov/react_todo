import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} index={index} key={todo.id} onChange={onToggle} />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList