import React from "react";
//import { useEffect, useState } from 'react';
import '../css/tabla.css'
import Usedatos from "./Usedatos";


function ListaUsuarios(props){
 
const Eliminar =(Id) =>{
    const url ='http://localhost:3001/api/usuario/'+Id;
    console.log(url);
    const fetchApi = async() => {
        const response = await fetch(url,{method:'DELETE'});
        console.log(response.status);
        const responseJson = await response.json()
        console.log(responseJson);
        //Usedatos();
      }
      fetchApi();
}





    return(
<div className="container-table100">
<div className="wrap-table100">
<div className="table100">
<table>
<thead>
<tr className="table100-head">
<th className="column1 text-center" colSpan="7" >Lista de Usuarios </th>

</tr>
</thead>
<thead>
<tr className="table100-head">
<th className="column1">Documento </th>
<th className="column2">Nombre</th>
<th className="column3">Email</th>
<th className="column4">Estado</th>
<th className="column5">Rol</th>
<th className="column6">Modificado</th>
<th className="column6"></th>
</tr>
</thead>
<tbody>
{!props.usuarios ? 'cargando': props.usuarios.map(usuario=>(<tr key={usuario._id}>
<td className="column1">{usuario.documentoId}</td>
<td className="column2">{usuario.nombre}</td>
<td className="column3">{usuario.email}</td>
<td className="column4">{usuario.activo ? 'activo':'inactivo'}</td>
<td className="column5">{usuario.rol}</td>
<td className="column6">{usuario.f_ult_modificacion}</td>
<td className="column6"><button >✏️</button><button onClick={() => {Eliminar(usuario._id)}} >❌</button></td>

</tr>
)
    
    )}

</tbody>
</table>
</div>
</div>
</div>
    )
}
export default ListaUsuarios;

/*
<td className="column1">{!props.usuarios ? 'cargarndo':props.usuario.documentoId}</td>
<td className="column2">{!props.usuarios ? 'cargarndo':props.usuario.nombre} </td>
<td className="column3">{!props.usuarios ? 'cargarndo':props.usuario.email}</td>
<td className="column4">{!props.usuarios ? 'cargarndo':props.usuario.activo}</td>
<td className="column5">{!props.usuarios ? 'cargarndo':!props.usuario.rol ? 'activo':'inactivo'}</td>
<td className="column6">{!props.usuarios ? 'cargarndo':props.usuarios[0].f_ult_modificacion}</td>
<td className="column6"><button >✏️</button><button >❌</button><button >✏️</button></td>
*/