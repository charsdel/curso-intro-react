import React from 'react'
import './TodoCounter.css';
import { TodoContext } from '../App/useTodos';



function TodoCounter ({totalTodos,completedTodos,loading}){
    //consumiendo los estados con el react context

  //const {totalTodos,completedTodos} = React.useContext(TodoContext);

  return (
    <h2 
    className={`TodoCounter ${!!loading && "TodoCounter--loading"}`} 
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>

  )
}

export {TodoCounter}



