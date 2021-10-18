import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const Tasks = ( { tasks, toggleTaskDone }) => (
  <ul className="list">
    {
      tasks.map((task) => <Task key={task.id} {...task} toggleTaskDone={toggleTaskDone} />)
    }
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
      },
    ),
  ).isRequired,
  toggleTaskDone: PropTypes.func.isRequired,
}

export default Tasks;
