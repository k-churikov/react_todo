import React, { useState } from 'react';
// import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },

    clear: () => setValue(defaultValue),
    value: () => value
  }
}


function TodoAdd({ onCreate }) {
  const input = useInputValue()

  const submitHandler = event => {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value()) 
      input.clear()
    }
  }

  // const inputHandler = event => {
  //   setValue(event.target.value)
  // }

  return (
    <form className="todo-form" onSubmit={event => submitHandler(event)}>
      <input className="todo-input" type="text" placeholder="Add todo" {...input.bind} />
      {/* <Modal /> */}
      <input className="todo-submit" type="submit" value="Добавить" 
        disabled={input.value() ? false : true} />
    </form>
  )
}

TodoAdd.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default TodoAdd