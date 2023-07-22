import React from "react"
import Filter from "./Filter";

 const Search = () => {
    return(
         <div className="d-flex">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <Filter/>
         </div>
    )
}
export default Search;