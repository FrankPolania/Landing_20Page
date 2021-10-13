import { useState } from 'react';
import usedatos from './Usedatos';



// importando componentes 

import Proyectos from "./Proyectos";
//import CrearProyecto from "./Crearproyecto";
import BuscarArbol from "./BuscarArbol";
import ListaUsuarios from "./ListaUsuarios";

// importando archivos
import '../css/styles.css'
import imgUsuario from '../images/usuario.png';
import ListaProyectos from './Listaproyectos';
import ListaArboles from './ListaArboles';




// inicio del componente  dashboard
function InventarioArboles(){
let usuarios = usedatos();  

const [opcion,setOpcion]= useState(Proyectos);//controlar pantalla

return(
    <div className='conteiner-fluid'>
        <div className='row'>
        <div className="col-2" >  
        <aside className="bg-dark ">
            <div className="conteiner">
            <div className="row">
            <div className="col p-4">
            <span>hola</span>
            <img id= "usuario" src={imgUsuario} alt=""/>
            <div id="perfil">
            <p><span>frank</span><br/>
            <span>hola</span></p>

            </div>
            <a className="col-12 btn btn-primary mb-2" href="/usuarios" >Usuarios</a>
            <a className="col-12 btn btn-primary mb-2" href="/misproyectos">Mis proyectos</a>
            <a className="col-12 btn btn-primary mb-2" href="/crearproyecto" >Crear proyectos</a>
            <a className="col-12 btn btn-primary mb-2" href="/inventarioarboles" >Inventario Arboles</a>
            <a className="col-12 btn btn-primary mb-2" href="/buscararbol" >buscar arbol</a>

            </div>
            </div>
            </div>  
        </aside>
        </div> 
            <div className="col-9">
              <ListaArboles usuarios={usuarios}/>
            </div>
        </div>

    </div>
);


}
export default InventarioArboles;