import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';


//TodoSearch
//parametros recibe dos props desde el componente padre
function TodoSearch(){

  //consumiendo los estados con el react context
  const {searchValue,setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  return[
    <input 
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}  
      onChange = {onSearchValueChange}
    />,
    <p>{searchValue}</p>
  ]
}

export {TodoSearch}


