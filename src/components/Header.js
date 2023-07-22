import React from "react"
import './style/Header.css'

 const Header = ({todo,done}) => {
    return(
           <div className="summury">
            <h1>Todo List</h1>
            <p>{todo} more to do, {done} done.</p>
           </div>
    )
}

export default Header;


