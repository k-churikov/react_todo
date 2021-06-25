import React, { useState } from 'react';
import PropTypes from 'prop-types'

// my custom hook input
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if(input.value().trim()) {
      onCreate(input.value())
      input.clear()
      // setValue('')
    }
  }
 
  return (
    <form onSubmit={submitHandler}>
      <input type='text' {...input.bind} />
      {/* <input type='text' value={value} onChange={event => setValue(event.target.value)} /> */}
      <button type='submit'>Add Todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo