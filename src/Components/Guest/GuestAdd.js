import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./GuestAdd.css";
export const GuestAdd = () => {
   const [adult , setAdult] = useState(0)
   const [children , setChildren] = useState(0)
   const [infants , setInfantspe] = useState(0)
   const [pet , setPet] = useState(0)


    return (
        <div id="guest-add-main">

            <div id="guest-add-button-div">
                <h5 id="add-guest">Add guest</h5>
                <button id="guest-add-btn">
                    <FaSearch /> Search
                </button>
            </div>

            {/* Counter area */}

            <div id="guest-add-counter-div">
                {/* adult counter area  */}

                <div id="adult-counter-div">
                    <div id="adult-heading-div">
                        <h5 id="adult">Adults</h5>
                        <h5 id="adult-age">Age 13 or above</h5>
                    </div>
                    <div id="adult-counter">
                        <button id="adult-counter-minus">-</button>
                        <h6 id="adult-count">0</h6>
                        <button id="adult-counter-plus">+</button>
                    </div>
                </div>
                   
                   <hr />
                {/* children counter area */}

                <div id="children-counter-div">
                    <div id="children-heading-div">
                        <h5>Adult</h5>
                        <h6>Age 13 or above</h6>
                    </div>
                    <div id="children-counter">
                        <button id="children-counter-minus">-</button>
                        <h6>0</h6>
                        <button id="children-counter-plus">+</button>
                    </div>
                </div>

 <hr />
                {/* infault counter area */}

                <div id="infants-counter-div">
                    <div id="infants-heading-div">
                        <h5>Adult</h5>
                        <h6>Age 13 or above</h6>
                    </div>
                    <div id="infants-counter">
                        <button id="infants-counter-minus">-</button>
                        <h6>0</h6>
                        <button id="infants-counter-plus">+</button>
                    </div>
                </div>

<hr />
                {/* pets counter area  */}

                <div id="pets-counter-div">
                    <div id="pets-heading-div">
                        <h5>Adult</h5>
                        <h6>Age 13 or above</h6>
                    </div>
                    <div id="pets-counter">
                        <button id="pets-counter-minus">-</button>
                        <h6>0</h6>
                        <button id="pets-counter-plus">+</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
