import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacion from './componentes/Navegacion';
import Proyectos from './componentes/Proyectos';
import Nosotros from './componentes/Nosotros';
import Footer from './componentes/Footer'
import Carrusel from './componentes/carrusel'

ReactDOM.render(
  <React.StrictMode>
    <Navegacion />
    <Carrusel />
    <Proyectos />
    <Nosotros />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
