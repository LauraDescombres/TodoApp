// == Import npm
import React from 'react';
import Counter from '../Counter';
import Form from '../Form';
import Tasks from '../Tasks';

// == Import
import './todolist.scss';
import tasksData from '../../data/tasks';

class Todolist extends React.Component {

  state = {
    // liste des tâches
    tasks: tasksData,
    // valeur de l'input
    newTaskLabel: '',
  }

  setNewTaskLabel = (newTaskLabel) => {
    this.setState(
      {
        newTaskLabel: newTaskLabel,
      }
    )
  }

  // méthode de gestion des états des taches
  toggleTaskDone = (taskId) => {
    const { tasks } = this.state
    const newTasks = tasks.map(
      (task) => {
        if (task.id === taskId) {
          return {
            ...task,
            done: !task.done
          
          }
        }
        return task
    })

    this.setState(
      {
        tasks: newTasks,
      }
    )
  }

  // fonction permettant de recup le plus grand id                
  getLastId = () => {
    const { tasks } = this.state
    const idList = tasks.map((task) => task.id)
    idList.sort((a, b) => b - a)
    const lastId = idList[0]
    return lastId
  }
  
  // méthode d'ajout de tâche
  addTask = () => {
    
    const { tasks, newTaskLabel } = this.state
    const newTask = {
      id: this.getLastId() + 1,
      label: newTaskLabel,
      done: false,
    }

    const newTasks = [...tasks, newTask]
    this.setState(
      {
        tasks: newTasks,
        newTaskLabel: '',
      }
    )
  }

  render(){
    const { tasks, newTaskLabel } = this.state

    const undoneTasks = tasks.filter(
      (task) =>  task.done === false,
    );
    const undoneTasksNumber = undoneTasks.length;
  
    // console.log(undoneTasksNumber);
    return (
      <div className="todolist">
        {

        }
        <Form 
          submitTask={this.addTask} 
          newTaskLabel={newTaskLabel} 
          setNewTaskLabel={this.setNewTaskLabel} 
        />
        <Counter count={undoneTasksNumber} />
        <Tasks tasks={tasks} toggleTaskDone={this.toggleTaskDone} />
      </div>
    );
  }
}

// == Export
export default Todolist;
