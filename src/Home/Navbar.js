import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

 const AddNav=()=> {
 
    return (
  <div class="container">
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
    <Link to="/" className='links'> Home</Link>
    <Link to="/Projects" className='links'> Projects</Link>
    </div>
  </nav>
</div>
   
  
  
   
 
    
   
    );
  
}

export default AddNav;