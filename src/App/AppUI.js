import React from "react";


import { TodoContext } from "../TodoContext";


import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Todoform } from "../TodoForm";

import { CreateTodoButton } from "../CreateTodoButton";
import {Modal} from "../Modal"


//para el skeleton de los errores

import {TodoError} from "../TodoError"
import {TodoLoading} from "../TodoLoading"
import {EmptyTodos} from "../EmptyTodos"


function AppUI(){

    //se recibe del context todos los estados
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter/>    
      <TodoSearch/>
       

      <TodoList>
      {error && <TodoError error={error}/> }

      {loading && <TodoLoading/> }

      {(!loading && !searchedTodos.length)&& <EmptyTodos/>}

      {searchedTodos.map(todo =>
        (<TodoItem
          key={todo.text}
          text={todo.text}
          completed= {todo.completed}
          onComplete = {()=> completeTodo(todo.text)}
          onDelete = {()=> deleteTodo(todo.text)}

        />))
      }
      </TodoList>

      {!!openModal &&(
        <Modal>
          <Todoform></Todoform>
        </Modal>

      ) }
      

       
      <CreateTodoButton
      
        setOpenModal = {setOpenModal}
      
      />      
   </React.Fragment> 
    );

}

export {AppUI}