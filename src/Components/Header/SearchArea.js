import React from "react";
import "./SearchArea.css";
import { FaSearch } from 'react-icons/fa';
function SearchArea() {
  return (
    <div id="SearchArea-div">
    <button className="btn">Anywhere</button>
    <button className="btn">Any Week</button>
    <button className="btn">Add Guests</button>
    <button className="search-btn"> <FaSearch/> </button>
    </div>
  );
}

export default SearchArea;
