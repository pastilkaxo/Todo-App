import React from "react";
import './style/Items.css'

export default function TodoListItem({task,important=false}) {
          const style ={
            color: important ? "steelblue" : "black"
          }
    return(
         <div className="list">
          <span className="list-item-task" style={style}>{task}</span>
          <span className="d-flex">
          <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right">
      &times;
      </button>
          </span>
         </div>

     

    )
}