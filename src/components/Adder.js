import React,{Component} from "react";
import './style/Adder.css'

export default class Adder extends Component{

constructor(){
    super();
    this.state = {
        task:''
    }
}


  onTaskChange = (e) => {
        this.setState({task: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {task} = this.state
    this.props.onItemAdd(task)
    this.setState({
        task:''
    })
  }

    render(){
        return(
             <form className="d-flex add-panel" onSubmit={this.onSubmit}>
                <input class="form-control me-2"  value={this.state.task}
                type="text" placeholder="Add item" onChange={this.onTaskChange}/>
                <button className="btn btn-secondary">Add</button>
             </form>
        )
    }
}