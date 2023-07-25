import React, { Component } from "react";
import './style/Filter.css'


export default class Filter extends Component {

  render(){
    return(
<div className="filters btn-group" role="group" >
        <button className="btn btn-outline-primary active">All</button>
        <button className="btn btn-outline-primary">Active</button>
        <button className="btn btn-outline-primary">Done</button>
</div>
    )
  }
}



