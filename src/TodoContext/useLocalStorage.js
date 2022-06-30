import React from "react";



function useLocalStorage(itemName, initialValue){

    //estado de error
    const [error,setError] = React.useState(false);
    
    //estado de cargando, que inicialmente sera tru porque la aplicacion esta cargando cuando inicia
    const [loading, setLoading] = React.useState(true);
  
    //estado para los todos y asiga a todos internamente defaultTodos
    const [item, setItem] = React.useState(initialValue); 
  
    
  
     React.useEffect(()=>{
  
      setTimeout(()=>{
        try{
  
            //almacenar en local storage
  
            const localStorageItem = localStorage.getItem(itemName);
  
            let parsedItem;
          
            if (!localStorageItem){
          
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
  
          
            }else{
          
                parsedItem = JSON.parse(localStorageItem); 
            }
  
            setItem(parsedItem);
            setLoading(false);
  
        }catch(error){
          setError(Error);
        }
      },3000)
  
    });
  
  
    
  
   
    //NOTA: saveTodos no va dentro del effect porque no va hacer acciones por defecto
    //sino cuando se le solicite
    const saveTodos = (newItem) =>{
  
      try {
        //transforma el array en cadena
      const stringifiedItem = JSON.stringify(newItem);
  
      //local sorage solo acepta cadenas
      localStorage.setItem(itemName,stringifiedItem)
      setItem(newItem);
      } catch (error) {
  
        setError(error);
        
      }
    };
  
  
    //el hook necesita retornar el valor y la funcion que usa para cambiar el estado de la variable
    //debe retornar un array
  
  
    /* NOTA: en react hooks si el retorno tiene mas de un estado
     se debe enviar un objeto y no un array, es decir en lugar de poner [] se pone {}*/
    return {
      item,
      saveTodos,
      loading,
      error,
    };
    
  }

  
  export {useLocalStorage}