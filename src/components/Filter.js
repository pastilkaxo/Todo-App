import React, { Component } from "react";
import './style/Filter.css'


export default class Filter extends Component {
     
 
 buttons = [
  {name:"all" , task:"All"},
  {name:"active" , task:"Active"}, 
  {name:"done" , task:"Done"},
 ]




  render(){
    const {filter , onFilter} = this.props;
    const buttons = this.buttons.map(({name,task}) =>{
      const isActive = filter === name;
      const isInactive = isActive ? "btn-info" : "btn-outline-secondary";
       return(
        <button key={name} className={`btn ${isInactive}`} onClick={()=> onFilter(name) }>{task}</button>
       )
    });

 

    return(
<div className="filters btn-group" role="group" >
{buttons}
</div>
    )
  }
}



