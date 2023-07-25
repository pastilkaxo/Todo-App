import React, { Component } from "react"
import TodoList from "./TodoList"
import Search from "./Search"
import Header from "./Header"
import Adder from "./Adder"

export default class App extends Component{
 constructor(){
  super();
  this.state = {
    data : [
      {task:"Crate App", important:true , id:1},
      {task:"Chill", important:false, id:2},
      {task:"Do sports", important:false,id:3},
    ]
  }
 }

 deletedItems = (id) => {
  this.setState(({data}) => {
        const idx = data.findIndex((el) => el.id === id)
        
      
        const newArray = [...data.slice(0,idx),...data.slice(idx+1)];
        return{
          data:newArray
        }
           
        
  })
 }

 randomId =(min,max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
 }

 generateUniqueId = (data) => {
  let newId = this.randomId(1, 100);

  while (data.some((item) => item.id === newId)) {
    newId = this.randomId(1, 100);
  }

  return newId;
};




 addItem = (text) => {
     const newId = this.generateUniqueId(this.state.data);
          
     const newItem = {
      task:text,
      important:false,
      id:newId
     }

   this.setState(({data}) => {
            const newArr = [...data,newItem]
            console.log(newArr)
            return{
              data:newArr
            }
   })
   
           

       
}


render(){
    return(
        <div>
            <Header todo={1} done={3}/>
            <Search/>
            <TodoList list={this.state.data}
            onDeleted={this.deletedItems}
            />
            <Adder onItemAdd={this.addItem}/>
        </div>
    )
    }
}