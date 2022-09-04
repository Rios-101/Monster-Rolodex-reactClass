import { Component } from "react";
import "./search-bar.style.css"

class SearchBar extends Component{


   render(){

      const { onChangeHandler, placeholder,classname } = this.props;

      return (
         <input
            type="search"
            className={`search-box ${classname}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
         />
      );
   }
}

export default SearchBar