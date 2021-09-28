import React from "react";
import { Fragment } from "react";
import Navegacion from '../componentes/Navegacion';
import Proyectos from '../componentes/Proyectos';
import Nosotros from '../componentes/Nosotros';
import Footer from '../componentes/Footer'
import Carrusel from '../componentes/carrusel'

function Home(){
    return(
    <Fragment>
        <Navegacion />
        <Carrusel />
        <Proyectos />
        <Nosotros />
        <Footer />
    </Fragment>
    );
}

export default Home;