
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext'



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


  return (

    //se envuelven toda la aplicacion dentro del provider todos los componentes
    //se detectectan en props.childen en este caso AppUI y los hijos dentro de AppUI
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
