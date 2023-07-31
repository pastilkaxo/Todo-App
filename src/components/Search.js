import React, { Component } from "react"



export default class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
        searchResult: '',
      };
    }
  
   
  handleSearch = (e) => {
   const searchResult = e.target.value;
   this.setState({searchResult});
   this.props.handleSearch(searchResult);

 };

   render(){
      return(
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.searchResult}  onChange={this.handleSearch} />
         
    )
   }
}






