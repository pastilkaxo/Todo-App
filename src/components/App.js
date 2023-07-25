import React, { Component } from "react"
import TodoList from "./TodoList"
import Search from "./Search"
import Header from "./Header"
import Adder from "./Adder"

export default class App extends Component{

  maxId = 1;   // HOW !!!!!

 constructor(){
  super();
  this.state = {
    data : [
          this.createTodoItem('Create App'),
          this.createTodoItem('Drink'),
          this.createTodoItem('Eat'),
    ]
  }
 }

 createTodoItem(task){
  return{
    task,
    important:false,
    done:false,
    id:this.maxId++
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

 addItem = (text) => {          
     const newItem = {
      task:text,
      important:false,
      id:this.maxId++
     }

   this.setState(({data}) => {
            const newArr = [...data,newItem]
            console.log(newArr)
            return{
              data:newArr
            }
   })
    
  }

  onToggleImportant = (id) => {
    this.setState(({data}) => {
      const idx = data.findIndex((el) => el.id === id)
         const oldData = data[idx];
         const newData = {...oldData, important: !oldData.important}
         const newArray = [...data.slice(0,idx),newData,...data.slice(idx+1)];
          
         return{
           data:newArray
         }
    })
}

  onToggleDone = (id) => {
    this.setState(({data}) => {
      const idx = data.findIndex((el) => el.id === id)
         const oldData = data[idx];
         const newData = {...oldData, done: !oldData.done}
         const newArray = [...data.slice(0,idx),newData,...data.slice(idx+1)];
          
         return{
           data:newArray
         }
    })
 }


render(){
const {data} = this.state
 const doneCount = data.filter((el)=>el.done).length;
 const todoCount = data.length - doneCount;

    return(
        <div>
            <Header todo={todoCount} done={doneCount}/>
            <Search/>
            <TodoList list={data}
            onDeleted={this.deletedItems}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <Adder onItemAdd={this.addItem}/>
        </div>
    )
    }
}