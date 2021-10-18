import React from 'react';
import PropTypes from 'prop-types';

import './task.scss';

const Task = ( {id, label, done, toggleTaskDone} ) => {

return  (
  <li>
    <label 
      htmlFor={`checkbox${id}`} 
      className={done ? 'list__item list__item--done' : 'list__item'}
    >
      <input id={`checkbox${id}`} type="checkbox" checked={done} onChange={() => toggleTaskDone(id)} />
      {label}
    </label>
  </li>
  );
}

Task.prototype = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
}

export default Task;
