import React, { Component } from "react";
import Navbar from '../Home/Navbar'

function Projects() {
    return (
       
        <div class="container">
            <Navbar/>
            <div class="row justify-content-center">
    <div class="col-4">
    
    <div class="card" style={{ width:"400", height:"200"}}>
    
  <div class="card-body">
    <h5 class="card-title">daweha project </h5>

    <iframe src="https://www.youtube.com/embed/a_USwnR86u4" 
    title="YouTube video player" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen/>

    <p class="card-text">It is a website that allows users to display their
recyclable items to the admin so he can collect them
and pay them the amount the item is worth.</p>
   
  </div>
</div>


<div class="card" style={{ width:"400", height:"200"}}>
    
  <div class="card-body">
    <h5 class="card-title">dafa project  </h5>

    <iframe src="https://www.youtube.com/embed/nXzt8Q5hFIM" 
    title="YouTube video player" frameborder="0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>
    <p class="card-text">It is a charity website that allows users to donate items to
people in need.</p>
   
  </div>
</div>
    
<div class="card" style={{ width:"400", height:"200"}}>
    
  <div class="card-body">
    <h5 class="card-title">bazzar project  </h5>

    <iframe  src="https://www.youtube.com/embed/AyAnKaUTRwo" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
    <p class="card-text">It is an e-commerce website that allows users to post items
they want to sell.</p>
    
  </div>
</div>


</div>

    </div>
    
  

  




         
</div>
      
    );
  }


  export default Projects;



  