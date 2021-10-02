import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Paginas/Home';
import Nosotros from './componentes/Nosotros';
import Login from './Paginas/Login';
import Password from './Paginas/password';
import Registro from './Paginas/Registro';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Navegacion />
        <Route exact path="/" component={Home} />  
        <Route exact path="/nosotros" component={Nosotros} /> 
        <Route exact path="/login" component={Login} />  
        <Route exact path="/password" component={Password} />  
        <Route exact path="/registro" component={Registro} /> 

        <Footer />
      </div>
    </Router>
   </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
