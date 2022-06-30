import React from 'react'
import './CreateTodoButton.css';


export const CreateTodoButton = (props) => {

  const onClickButton = () =>{

   //todas las funciones actualizadoras de estado permite obtener el estado anterior
   //prevstate permite eso 
   props.setOpenModal(prevState => !prevState);
  }; 


  return (
    <button className="CreateTodoButton"
    
    onClick = {onClickButton}
    >+</button>

    
  )
}
