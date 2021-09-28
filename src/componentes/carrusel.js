import React from "react";
import imagen1 from "../images/grove-in-summer.jpg"
import '../css/styles.css';

function Carousel(){
    return(
<section id="capa">
<div id="carousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imagen1}  className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={imagen1}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <div className="overlay" >
        <div id="cont" className="container">
            <div className="row align-items-center">
                <div className="col-md-6 offset-md-6 text-right">
                   <h1>BOGOTA</h1> 
                   <h1>Silvicultural</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                </div>
            </div>
        </div>
  </div>
</div>
</section>
    );

}
export default Carousel;