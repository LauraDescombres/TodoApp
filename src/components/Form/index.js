import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ submitTask, newTaskLabel, setNewTaskLabel }) => {
  
  function handleSubmit(event) {
    event.preventDefault(); //annule le rechargement de la page
    submitTask()
  }

  function handleChange(event) {
    const { value } = event.target
    setNewTaskLabel(value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {

      }
      <input 
        type="text" 
        className="form__item" 
        placeholder="Ajouter une tâche" 
        value={newTaskLabel} 
        onChange={handleChange}
      />
    </form>
  );
}

Form.propTypes = {
  submitTask: PropTypes.func.isRequired,
  newTaskLabel: PropTypes.string.isRequired,
  setNewTaskLabel: PropTypes.func.isRequired,
}

export default Form;
