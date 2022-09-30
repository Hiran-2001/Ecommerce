import React from "react";
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import {GoThreeBars} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import "./Profile.css";
function Profile({button}) {
  return (
    <div id="profile-div">
      <div id="host">
        <h4 id="host-h4">Become a host</h4>
      </div>
      <div id="translate"> <HiOutlineGlobeAlt id="translate-icon"/> </div>
      <button onClick={button} id="profile">
         <GoThreeBars id="bar"/>
         <CgProfile id="pro-logo"/>
      </button>
    </div>
  );
}

export default Profile;
