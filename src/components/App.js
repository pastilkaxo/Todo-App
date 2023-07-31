import React, { Component } from "react"
import TodoList from "./TodoList"
import Search from "./Search"
import Header from "./Header"
import Adder from "./Adder"
import Filter from "./Filter";


export default class App extends Component{

  maxId = 1;   // HOW !!!!!

 constructor(){
  super();
  this.state = {
    data : [
          this.createTodoItem('Create App'),
          this.createTodoItem('Drink'),
          this.createTodoItem('Eat'),
    ],
    searchResult: '',
    filter: 'all' 
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

 search = (items ,searchResult) => {
  if(searchResult.length === 0){
    return items;
  }

     return items.filter((el) => {
      return el.task.toLowerCase().indexOf(searchResult.toLowerCase()) > -1;
     })
 };
  
 onSearchChange = (searchResult) => {
  this.setState({searchResult});
 };

filter = (items,filter) => {
  switch(filter){
    case 'all':
      return items;
    case 'active':
      return items.filter((el)=>
      !el.done
    );
    case 'done':
      return items.filter((el)=>
        el.done
      );
    default:
      return items;
  }
}

onFilter = (filter) =>{ 
  this.setState({filter});
}  


render(){
    const {data , searchResult , filter} = this.state;
    const visibleItems = this.filter(this.search(data , searchResult),filter);

 const doneCount = data.filter((el)=>el.done).length;
 const todoCount = data.length - doneCount;

    return(
        <div>
            <Header todo={todoCount} done={doneCount}/>
                <div className="d-flex">
                <Search list={data} handleSearch={this.onSearchChange}/>
                <Filter filter={filter}  onFilter = {this.onFilter}/>
                </div>
            <TodoList list={visibleItems}
            onDeleted={this.deletedItems}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <Adder onItemAdd={this.addItem}/>
        </div>
    )
    }
}