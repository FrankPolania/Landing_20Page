import React from 'react';
import Proyecto from '../componentes/Proyecto';


function Proyectos(){
    let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ";
    let enlace="https://bogota.gov.co/mi-ciudad/ambiente/bondades-y-beneficios-del-arbolado-urbano-en-bogota";
    return(
        <div className="container p-4">
        <div className="row">
        <h1 className="col-12 text-center p-4">Proyectos</h1>
        <div className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre="Proyecto 1" text={text} enlace={enlace}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre="Proyecto 2" text={text} enlace={enlace}/>
        </div>
        <div id="saludo" className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre="Proyecto 3" text={text} enlace={enlace}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre="Proyecto 4" text={text} enlace={enlace}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre="Proyecto 4" text={text} enlace={enlace}/>
        </div>
        </div>
        </div>

    );

}
export default Proyectos;