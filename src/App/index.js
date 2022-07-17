
import React from 'react';


import { useTodos } from "./useTodos";

import { TodoHeader } from "../TodoHeader";


import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Todoform } from "../TodoForm";

import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal"

import { ChangeAlertwithStorageListener } from "../ChangeAlert"
//para el skeleton de los errores

import {TodoError} from "../TodoError"
import {TodoLoading} from "../TodoLoading"
import {EmptyTodos} from "../EmptyTodos"



//estos Todos se alamacenan en local storage por la terminal 
//para usarlos

/*
const defaultTodos = [

  {text: 'Cortar CEbolla', completed:true},
  {text: 'tomar curso de react', completed:true},
  {text: 'llorar con la llorona', completed:false}
];*/


//itemName: sera el elemento que almacenemos en local storage
//initialVAlue: valor por defecto del item en localStorage

function App() {


  //se recibe del context todos los estados
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
  } = useTodos();

  return (
    <React.Fragment>

      <TodoHeader loading = {loading}>

         <TodoCounter
                totalTodos = {totalTodos}
                completedTodos = {completedTodos}
          />
          <TodoSearch

              searchValue =  {searchValue}
              setSearchValue = {setSearchValue}
              
          />
      </TodoHeader>
         
      
      
      
      <TodoList
        error = {error}
        loading = {loading}
        totalTodos = {totalTodos}

        searchedTodos = {searchedTodos}
        searchText = {searchValue}
        onError = {()=> <TodoError/>} 
        onLoading = {() => <TodoLoading/>}
        onEmptyTodos = {() => <EmptyTodos/>}
        onEmptyResultTodos = {
          (searchText) => <p>No hay resultados para {searchText} </p>
        }
       >
        
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
        
      </TodoList> 
     


      {!!openModal &&(
        <Modal>
          <Todoform
            addTodo={addTodo}
            setOpenModal ={setOpenModal}
          />
        </Modal>

      ) } 
      

       
      <CreateTodoButton
      
        setOpenModal = {setOpenModal}
      
      />   

      <ChangeAlertwithStorageListener />
        
          
   </React.Fragment> 
    );
}

export default App;
