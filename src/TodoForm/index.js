import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"



function Todoform(){

    const [newTodoValue, setNewTodoValue] =  React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)


    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        //console.log(event.target.value);
        setNewTodoValue(event.target.value);

         
    };

    const onCancel = () => {
        setOpenModal(false);

    };


    const onSubmit = (event) => {

        //evita que recargue la pagina y envie la info a otro lado
        //console.log(newTodoValue);
        event.preventDefault();
        addTodo(newTodoValue);

        // Cerramos nustro modal
        setOpenModal(false);
        // También estaría bien resetear nuestro formulario
        setNewTodoValue('')

    };

    return(
        <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar la cebolla para el almuerzo"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button-cancel"
            onClick={onCancel}
            >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button-add"
          >
            Añadir
          </button>
        </div>
      </form>
    );
}

export { Todoform }