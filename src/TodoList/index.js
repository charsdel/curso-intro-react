import React from 'react'
import './TodoList.css';




export const TodoList = (props) => {

  const renderFunc = props.children || props.render;
  return (

    


    <section className='TodoList-container'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

    
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResultTodos(props.searchText) }

        {props.searchedTodos.map (renderFunc)}

        <ul>
            {props.children}
        </ul>
    </section>
  )
} 
