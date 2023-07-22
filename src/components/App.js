import React from "react"
import TodoList from "./TodoList"
import Search from "./Search"
import Header from "./Header"


export default function App(){

  const data = [
    {task:"Crate App", important:true , id:1},
    {task:"Chill", important:false, id:2},
    {task:"Do sports", important:false,id:3},
  ]


    return(
        <div>
            <Header todo={1} done={3}/>
            <Search/>
            <TodoList list={data}/>
        </div>
    )

}