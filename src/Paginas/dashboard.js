import { useState } from 'react';
import usedatos from '../componentes/Usedatos';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

// importando componentes 
import InventarioArboles from "../componentes/InventarioArboles";
import Proyectos from "../componentes/Proyectos";
import CrearProyecto from "./Crearproyecto";
import BuscarArbol from "../componentes/BuscarArbol";
import ListaUsuarios from "../componentes/ListaUsuarios";

// importando archivos
import '../css/styles.css'
import imgUsuario from '../images/usuario.png';
//import Mensaje from '../componentes/controles';



// inicio del componente  dashboard
function Dashboard(){
let usuarios = usedatos();  
//const [usuarios,setUsuarios]= usedatos();  
const [opcion,setOpcion]= useState(Proyectos);//controlar pantalla
//const history = useHistory();
//Mensaje("hola");
//Mensaje("frank");



return(
        <div className="conteiner-fluid">
             <div className="row">
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
                <Link className="col-12 btn btn-primary mb-2" to="/usuarios" >Usuarios</Link>
                <Link className="col-12 btn btn-primary mb-2" to="/misproyectos">Mis proyectos</Link>
                <Link className="col-12 btn btn-primary mb-2" to="/crearproyecto" >Crear proyectos</Link>
                <Link className="col-12 btn btn-primary mb-2" to="/inventarioarboles" >Inventario Arboles</Link>
                <Link className="col-12 btn btn-primary mb-2" to="/buscararbol" >buscar arbol</Link>

                </div>
                </div>
                </div>  
            </aside>
            </div> 
                <div className="col-9"> 
                  <ListaUsuarios usuarios={usuarios}/>
                 </div> 
            </div> 

        </div>
    );



}

export default Dashboard;


/*
<div className="conteiner">
<div className="row">
<div className="col p-4">
    <a className="col-12 btn btn-primary mb-2">hola</a>
    <a className="col-12 btn btn-primary mb-2">hola</a>

</div>
</div>
</div>


                <button className="col-12 btn btn-primary mb-2" onClick={() => {setOpcion(ListaUsuarios)}} >Usuarios</button>
                <button className="col-12 btn btn-primary mb-2" onClick={() => {setOpcion(Proyectos)}} >Mis proyectos</button>
                <button className="col-12 btn btn-primary mb-2" onClick={() => {setOpcion(CrearProyecto)}}  >Crear proyectos</button>
                <button className="col-12 btn btn-primary mb-2" onClick={() => {setOpcion(InventarioArboles)}}  >Inventario Arboles</button>
                <button className="col-12 btn btn-primary mb-2" onClick={() => {setOpcion(BuscarArbol)}} >buscar arbol</button>



*/