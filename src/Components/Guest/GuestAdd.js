import React from "react";
import { FaSearch } from 'react-icons/fa';
import "./GuestAdd.css";
export const GuestAdd = () => {
  return (
    <div id="guest-add-main">
      <div id="guest-add-button-div">
        <h5>add guest</h5>
        <button id="guest-add-btn"> <FaSearch/> Search</button>
      </div>
      <div id="guest-add-counter-div">Counter</div>
    </div>
  );
};
