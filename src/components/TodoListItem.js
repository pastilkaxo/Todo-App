import React,{Component} from "react";
import './style/Items.css'

export default class TodoListItem extends Component {
  

  render(){
   const  {task,onDeleted,onToggleImportant,onToggleDone,done , important} = this.props;
        let classNames = "list-item-task";
            if(done) {
              classNames += " text-decoration-line-through"
            }
          
          if(important){
            classNames += " important"
          }
    
    return(
      <div className="list">
      <span className={classNames} onClick={onToggleDone}>{task}</span>
      <span className="d-flex">
      <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
          >
    <i className="fa fa-exclamation" />
  </button>

  <button type="button" className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
  &times;
  </button>
      </span>
     </div>
    )
  }
}








