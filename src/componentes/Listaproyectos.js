import React, { useState } from 'react';
import Proyecto from '../componentes/Proyecto';



function ListaProyectos(){
    let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ";
    let enlace="https://bogota.gov.co/mi-ciudad/ambiente/bondades-y-beneficios-del-arbolado-urbano-en-bogota";
/*
    const arbolesdefault =[
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
        {Consecutivo:'001',Altura:320,Diametro:200,estado:'saludable',f_visita:"12-12-21"},
    ]
*/

    const proyectosDefault=[
    {nombre:"proyecto1",descripcion:"esta es la descripcion del primer proyecto que creamos en la plataforma silvicultural para el ententariado de arboles en la ciudad de bogota",imagen:"https://bogota.gov.co/mi-ciudad/ambiente/bondades-y-beneficios-del-arbolado-urbano-en-bogota",entidad:"acueducto de bogota",numeroArboles:5000,enlace:"http://google.com"},
    {nombre:"proyecto2",descripcion:"esta es la descripcion del primer proyecto que creamos en la plataforma silvicultural para el ententariado de arboles en la ciudad de bogota",imagen:"https://bogota.gov.co/mi-ciudad/ambiente/bondades-y-beneficios-del-arbolado-urbano-en-bogota",entidad:"acueducto de bogota",numeroArboles:5000,enlace:"http://google.com"}
    
    ];


    const [proyectosState,setProyectosState] = useState(proyectosDefault);
    

    return(
        <div className="container p-4">
        <div className="row">
        <h1 className="col-12 text-center p-4">Proyectos</h1>
        {proyectosState.map(proyecto => (
        <div className="col-12 col-md-6 col-lg-3">
        <Proyecto nombre={proyecto.nombre} text={proyecto.descripcion} enlace={proyecto.enlace} />
        </div>
        ))}

        
       
        </div>
        </div>

    );

}
export default ListaProyectos;