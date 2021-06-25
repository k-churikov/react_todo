import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    padding: '1rem',
    border: '1px solid gray',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    marginBottom: '.3rem',
    backgroundColor: 'white',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '20px',
    height: '20px',
    marginRight: '1rem',
  },
  strong: {
    paddingRight: '.5rem',
  },
  button: {
    padding: '.2rem 1rem',
    borderRadius: '5px',
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.complited) {
    classes.push('done')
  }

  return (
    <li style={styles.li}>
      <div style={styles.div} className={classes.join(' ')}>
        <input
          type="checkbox"
          style={styles.input}
          checked={todo.complited}
          onChange={() => onChange(todo.id)}
        />
        <strong style={styles.strong}>{index + 1}</strong> {todo.title}
      </div>

      <button style={styles.button} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
