import React from "react"
import TodoListItem from "./TodoListItem"
import "./style/TodoList.css"

const TodoList = ({list}) => {

  const elements = list.map(  (item) => {
    const {id , ...itemProps} = item;
    return(
        <li key={id} className="list-group-item"><TodoListItem {...itemProps} /></li>
    )
  })


    return(
        <ul className="list-group todo-list">
          {elements}
      </ul>
    )
    }
    export default TodoList;    