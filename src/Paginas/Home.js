import React from "react";
import { Fragment } from "react";
import Proyectos from '../componentes/Proyectos';
import Nosotros from '../componentes/Nosotros';
import Carrusel from '../componentes/carrusel'

function Home(){
    return(
    <Fragment>
        <Carrusel />
        <Proyectos />
        <Nosotros />
        <div style={{paddingBottom:"15vh"}}>hola </div>
    </Fragment>
    );
}

export default Home;