import React from 'react';
import logo2 from '../images/logo2.png';
import '../css/styles.css';


function Navegacion(){
    
    return(
    
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <img src={logo2} className="logo" alt=""/>
      <a className="navbar-brand" href="http://google.com">Silvicultural</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./nosotros">Nosotros</a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="./login">Login</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./dashboard">dashboard</a>           
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
    );
  }
  export default Navegacion;
  