import React from "react";
import './style/Filter.css'

export default function Filter(){
    return(
<div className="filters btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
  <label className="btn btn-outline-primary" for="btnradio1">All</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
  <label className="btn btn-outline-primary" for="btnradio2">Active</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
  <label className="btn btn-outline-primary" for="btnradio3">Done</label>
</div>
    )
}