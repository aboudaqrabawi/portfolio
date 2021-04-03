import React, { Component } from "react";
import Navbar from './Navbar'
import Profile from './profile.jpg'
function Home() {
    return (
        <div class="container">
            <Navbar/>
            <div class="row justify-content-center">
    <div class="col-4">

    <div class="card" style={{width: "25rem"}}>
  <img src={Profile} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">about me </h5>
    <p class="card-text">-capable of developing web apps with APIs with clean and
elegant code.<br></br>
- I gained the skill of autonomous learning while I was
studying in RBK coding bootcamp where I was able to finish

all the projects mentioned below with my team in 1 month .<br></br>
-Acquired the ability to use logic and scientific methods to
solve problems in addition to extensive analytical skills.
</p>
    
  </div>
</div>


    </div>
    </div>
     </div>
    );
  }


  export default Home;