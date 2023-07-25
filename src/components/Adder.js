import React,{Component} from "react";
import './style/Adder.css'

export default class Adder extends Component{

    
    render(){
        const {onItemAdd} = this.props
        return(
             <div className="d-flex add-panel">
                <input class="form-control me-2" type="text" placeholder="Add item" id="item-value"/>
                <button className="btn btn-primary"  onClick={() => onItemAdd("Hello world")}  >Add</button>
             </div>
        )
    }
}