import React,{Component} from "react";
import './style/Items.css'

export default class TodoListItem extends Component {
  
constructor(){
  super();
  this.state = {
       done:false,
       important:false,
      }
    };

   
     onTaskClick = () => {
     this.setState(({done}) => { 
      return{
        done:!done
      }
     })
      }

    onMarkImportant =() => {
      this.setState(({important}) => {
        return{
          important:!important
        }
      })
    }

  render(){
   const  {task,onDeleted} = this.props;
   const {done,important} = this.state;
        let classNames = "list-item-task";
            if(done) {
              classNames += " text-decoration-line-through"
            }
          
          if(important){
            classNames += " important"
          }
    
    return(
      <div className="list">
      <span className={classNames} onClick={this.onTaskClick}>{task}</span>
      <span className="d-flex">
      <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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








