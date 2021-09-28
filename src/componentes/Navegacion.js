import React from 'react';
import logo2 from '../images/logo2.png';
import '../css/styles.css';


function Navegacion(){
    
    return(
    
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src={logo2} className="logo"/>
      <a class="navbar-brand" href="#">Silvicultural</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./">Inicio</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href=".nosotros.html">Nosotros</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link" href="#">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Equipo</a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Login</a>
            
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
    );
  }
  export default Navegacion;
  