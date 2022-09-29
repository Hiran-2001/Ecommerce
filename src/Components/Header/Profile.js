import React from "react";
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import {GoThreeBars} from 'react-icons/go'
import {CgProfile} from 'react-icons/cg'
import "./Profile.css";
function Profile() {
  return (
    <div id="profile-div">
      <div id="host">
        <h4 id="host-h4">Become a host</h4>
      </div>
      <div id="translate"> <HiOutlineGlobeAlt id="translate-icon"/> </div>
      <div id="profile">
         <GoThreeBars id="bar"/>
         <CgProfile id="pro-logo"/>
      </div>
    </div>
  );
}

export default Profile;
