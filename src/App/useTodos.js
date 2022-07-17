import React from "react";


import { useLocalStorage } from "./useLocalStorage";


//TodoContext es un objeto que tienen dos componentes 
//TodoContext.provider y TodoContext.consumer 



function useTodos(){

      //se renombra todos
    //se renombra saveTodos
    const{
        item:todos,
        saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1',[]);

    //estado para pasarlo a todoSearch
    //parametro 1 es el valor, parametro 2 es la funcion que asigna el valor 
    const [searchValue, setSearchValue] = React.useState(''); 

    

    //contador de todos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    //contador total de todos
    const totalTodos = todos.length;


    //estado para el modal
    const [openModal, setOpenModal] = React.useState(false);
 

    //array vacio para todos buscados
    let searchedTodos = [];

    //si el input no tiene escrito nada asigna la lista original de todos
    if(!searchValue.length >=1){
        searchedTodos = todos
    }else{

        //itera con filter los todos
        searchedTodos = todos.filter(todo => {
        
        //convierte cada posicion a miniuscula 
        const todoText = todo.text.toLowerCase();
        //convierte el texto del inpu a minuscula
        const searchText = searchValue.toLowerCase();

        //busca con la propiedad include si el texto del input es subcadena
        return todoText.includes(searchText);
        });
    }

     // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  

  //funcion para completar todos
    const completeTodo = (text) =>{

      console.log(text)

      const todoIndex = todos.findIndex(todo => todo.text === text);

      //clonar la lista de todos
      const newItem = [...todos]

      newItem[todoIndex].completed = true;
      saveTodos(newItem);
    };

  //funcion para completar todos
    const deleteTodo = (text) =>{

    console.log(text)
    const todoIndex = todos.findIndex(todo => todo.text === text);

    //clonar la lista de todos
    const newItem = [...todos]

    //para borra una posicion del array
    //parametro uno : desde donde borrar
    //parametro 2: cuantos borrar:
    newItem.splice(todoIndex,1);
    saveTodos(newItem);
    };

    return{


      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
       
        
    };

}


// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { useTodos };