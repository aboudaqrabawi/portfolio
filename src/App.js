import React, { Component } from "react";
import Home from './Home/Homepage' 

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Projects from './projects/projects' 

function App() {
  return (
    <div className="App">
     <Router className="container">
    <div>
       <Route path="/" exact component={Home} /> 
      {/* {/* <Route path="/sign" exact component={Sign}/> */}
      <Route path="/Projects" exact component={Projects}/> 
      
    </div>
  </Router>
   </div>
  );
}

export default App;
